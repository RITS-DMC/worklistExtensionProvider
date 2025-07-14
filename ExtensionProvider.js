 sap.ui.define([
    "sap/dm/dme/podfoundation/extension/PluginExtensionProvider",
    "rits/custom/plugin/operationpodselection/worklistExtensionProvider/CreateExtension",
    "rits/custom/plugin/operationpodselection/worklistExtensionProvider/LifecycleExtension",
    "rits/custom/plugin/operationpodselection/worklistExtensionProvider/PluginEventExtension",
    "rits/custom/plugin/operationpodselection/worklistExtensionProvider/PropertyEditorExtension",
    "rits/custom/plugin/operationpodselection/utils/ExtensionUtilities"
], function (PluginExtensionProvider, CreateExtension, LifecycleExtension, PluginEventExtension, PropertyEditorExtension, ExtensionUtilities) {
    "use strict";
    return PluginExtensionProvider.extend("rits.custom.plugin.operationpodselection.worklistExtensionProvider.ExtensionProvider", {
        constructor: function () {
            this.oExtensionUtilities = new ExtensionUtilities();
        },
        getExtensions: function () {
           return [
               new CreateExtension(this.oExtensionUtilities),
               new LifecycleExtension(this.oExtensionUtilities),
               new PluginEventExtension(this.oExtensionUtilities),
               new PropertyEditorExtension(this.oExtensionUtilities)
           ];
        }
    })
});
