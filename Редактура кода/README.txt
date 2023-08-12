Переработать код так, чтобы сначала на форме отображался только «Выпадающий список». Если в 
нём выбрать значение «Да», то показывается компонент «Галочка», если «Нет» - скрывается.

Решение находится в файле solution.js Надо открыть эту ссылку https://fiddle.sencha.com/#view/editor&fiddle/3bao 
и вставить в файл app.js код из solution.js

Изначальный код из задачи:

Ext.application({
    name: 'Fiddle',
    launch: function () {
        var form = Ext.create('Ext.form.Panel', {
            fullscreen: true,
            referenceHolder: true,
            items: [{
                "xtype": "checkbox",
                "boxLabel": "Галочка",
                "id": "checkbox_1"
            }, {
                "xtype": "combobox",
                "label": "Выпадающий список",
                "id": "combobox_1",
                "queryMode": "local",
                "displayField": "value",
                "valueField": "value",
                "store": {
                    "fields": [
                        "value"
                    ],
                    "data": [{
                        "value": "Да"
                    }, {
                        "value": "Нет"
                    }],
                    "type": "store"
                },
                "editable": false,
                "hidden": true
            }]
        });
        form.show();
        const chk = Ext.getCmp('checkbox_1');
        const cmb = Ext.getCmp('combobox_1');
        function chk_change() {
            if (chk.getChecked()) {
                cmb.show();
            } else {
                cmb.hide();
            };
        };
        chk.on('change', chk_change);
    }
});