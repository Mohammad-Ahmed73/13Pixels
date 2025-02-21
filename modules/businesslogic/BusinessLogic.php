<?php

namespace modules\businesslogic;

use Craft;
use yii\base\Module as BaseModule;

use modules\businesslogic\fields\AddressLookup;

use verbb\formie\events\RegisterFieldsEvent;
use verbb\formie\services\Fields;
use yii\base\Event;
use craft\web\View;
use craft\events\RegisterTemplateRootsEvent;

/**
 * BusinessLogic module
 *
 * @method static BusinessLogic getInstance()
 */
class BusinessLogic extends BaseModule
{
    public function init(): void
    {
        Craft::setAlias('@modules/businesslogic', __DIR__);

        // Set the controllerNamespace based on whether this is a console or web request
        if (Craft::$app->request->isConsoleRequest) {
            $this->controllerNamespace = 'modules\\businesslogic\\console\\controllers';
        } else {
            $this->controllerNamespace = 'modules\\businesslogic\\controllers';
        }

        parent::init();

        // Defer most setup tasks until Craft is fully initialized
        Craft::$app->onInit(function() {
            $this->attachEventHandlers();
            // ...
        });

        Event::on(
            View::class,
            View::EVENT_REGISTER_CP_TEMPLATE_ROOTS,
            function (RegisterTemplateRootsEvent $e) {
                $e->roots[$this->id] = __DIR__ . '/templates';
            }
        );

        Event::on(View::class, View::EVENT_REGISTER_SITE_TEMPLATE_ROOTS, function(RegisterTemplateRootsEvent $event) {
            $event->roots[$this->id] = $this->getBasePath() . DIRECTORY_SEPARATOR . 'templates';
        });

        Event::on(Fields::class, Fields::EVENT_REGISTER_FIELDS, function(RegisterFieldsEvent $event) {
            $event->fields[] = AddressLookup::class;
            // ...
        });

    }

    private function attachEventHandlers(): void
    {
        // Register event handlers here ...
        // (see https://craftcms.com/docs/4.x/extend/events.html to get started)
    }
}
