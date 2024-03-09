gdjs.Shop_32GUICode = {};
gdjs.Shop_32GUICode.GDLeaf_9595BlowerObjects1= [];
gdjs.Shop_32GUICode.GDLeaf_9595BlowerObjects2= [];
gdjs.Shop_32GUICode.GDCloseObjects1= [];
gdjs.Shop_32GUICode.GDCloseObjects2= [];
gdjs.Shop_32GUICode.GDEquip_9595Leaf_9595BlowerObjects1= [];
gdjs.Shop_32GUICode.GDEquip_9595Leaf_9595BlowerObjects2= [];


gdjs.Shop_32GUICode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Equip_Leaf_Blower"), gdjs.Shop_32GUICode.GDEquip_9595Leaf_9595BlowerObjects1);
{for(var i = 0, len = gdjs.Shop_32GUICode.GDEquip_9595Leaf_9595BlowerObjects1.length ;i < len;++i) {
    gdjs.Shop_32GUICode.GDEquip_9595Leaf_9595BlowerObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Close"), gdjs.Shop_32GUICode.GDCloseObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Shop_32GUICode.GDCloseObjects1.length;i<l;++i) {
    if ( gdjs.Shop_32GUICode.GDCloseObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Shop_32GUICode.GDCloseObjects1[k] = gdjs.Shop_32GUICode.GDCloseObjects1[i];
        ++k;
    }
}
gdjs.Shop_32GUICode.GDCloseObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Leaf_Blower"), gdjs.Shop_32GUICode.GDLeaf_9595BlowerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Shop_32GUICode.GDLeaf_9595BlowerObjects1.length;i<l;++i) {
    if ( gdjs.Shop_32GUICode.GDLeaf_9595BlowerObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Shop_32GUICode.GDLeaf_9595BlowerObjects1[k] = gdjs.Shop_32GUICode.GDLeaf_9595BlowerObjects1[i];
        ++k;
    }
}
gdjs.Shop_32GUICode.GDLeaf_9595BlowerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 150;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Equip_Leaf_Blower"), gdjs.Shop_32GUICode.GDEquip_9595Leaf_9595BlowerObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(150);
}{for(var i = 0, len = gdjs.Shop_32GUICode.GDEquip_9595Leaf_9595BlowerObjects1.length ;i < len;++i) {
    gdjs.Shop_32GUICode.GDEquip_9595Leaf_9595BlowerObjects1[i].hide(false);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), true);
}}

}


};

gdjs.Shop_32GUICode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Shop_32GUICode.GDLeaf_9595BlowerObjects1.length = 0;
gdjs.Shop_32GUICode.GDLeaf_9595BlowerObjects2.length = 0;
gdjs.Shop_32GUICode.GDCloseObjects1.length = 0;
gdjs.Shop_32GUICode.GDCloseObjects2.length = 0;
gdjs.Shop_32GUICode.GDEquip_9595Leaf_9595BlowerObjects1.length = 0;
gdjs.Shop_32GUICode.GDEquip_9595Leaf_9595BlowerObjects2.length = 0;

gdjs.Shop_32GUICode.eventsList0(runtimeScene);

return;

}

gdjs['Shop_32GUICode'] = gdjs.Shop_32GUICode;
