Ext.application({
    name: 'Fiddle',
    launch: function () {
        var form = Ext.create('Ext.form.Panel', {
            fullscreen: true,
            referenceHolder: true,
            items: [{
                xtype: 'combobox',
                label: 'Выпадающий список',
                id: 'combobox_1',
                queryMode: 'local',
                displayField: 'value',
                valueField: 'value',
                store: {
                    fields: ['value'],
                    data: [{
                        value: 'Да'
                    }, {
                        value: 'Нет'
                    }],
                    type: 'store'
                },
                editable: false,
                listeners: {
                    change: function (combo, newValue) {
                        var checkbox = form.query('#checkbox_1')[0];
                        if (newValue === 'Да') {
                            checkbox.show();
                        } else {
                            checkbox.hide();
                        }
                    }
                }
            }, {
                xtype: 'checkbox',
                boxLabel: 'Галочка',
                id: 'checkbox_1',
                hidden: true
            }]
        });
        form.show();
    }
});