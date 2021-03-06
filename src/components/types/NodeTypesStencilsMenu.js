'use strict';

// opens 'the add new plugin' modal

/**
 *
 * functions used in stencils side menu
 *
 **/

exports.openAddNewStencilDialog = function(){
    $$('.addStencil').filter((elem)=>{
        return elem.getText().then((text)=>{
            console.log(text);

            return text === 'New stencil';
        });
    }).click();
};

exports.collapseAddedTyeps = function(typeName){
    $$('.stencil-type').filter((elem)=>{
        return elem.getText().then((text)=>{
            console.log('nodeType: ' + text);
            return text === typeName;
        });
    }).click();
};





