SimpleCRM.panel.Contact = function(config) {

    config = config || {};
    Ext.apply(config,{
        border: false
        ,id: 'simplecrm-panel-contact'
        ,baseCls: 'modx-formpanel'
        ,cls: 'container'
        ,layout: 'form'
        ,url: SimpleCRM.config.connectorUrl
        ,baseParams: {
            action: (config.isUpdate)? 'mgr/contact/update':'mgr/contact/create'
        }
        ,items: [{
            xtype: 'hidden'
            ,name: 'id'
        },{
            xtype: 'container'
            ,layout:'hbox'
            ,align:'stretch'
            ,defaults: {
                labelWidth:120
            }
            ,items:[{
                xtype:'container'
                ,layout:'form'
                ,flex:1
                ,style:'padding:20px;'
                ,items:[{
                    html:'<h2>General</h2>'
                },{
                    xtype: 'textfield'
                    ,fieldLabel: 'Name'
                    ,name: 'name'
                    ,anchor: '100%'
                },{
                    xtype: 'simplecrm-combo-schooltype'
                    ,fieldLabel: 'School Type'
                    ,name: 'school_type'
                    ,hiddenName: 'school_type'
                    ,anchor: '100%'
                },{
                    fieldLabel:'Contacted'
                    ,xtype: 'container'
                    ,defaultType: 'radio'
                    ,anchor: '100%;'
                    ,flex:1
                    ,items: [{
                        boxLabel:'Yes'
                        ,name:'contacted'
                        ,inputValue:1
                    },{
                        boxLabel:'No'
                        ,name:'contacted'
                        ,inputValue:0
                    }]
                },{
                    xtype: 'textarea'
                    ,fieldLabel: 'Description'
                    ,name: 'description'
                    ,anchor: '100%'
                }]
            },{
                xtype:'container'
                ,layout:'form'
                ,flex:1
                ,style:'padding:20px;'
                ,items:[{
                    html:'<h2>Contact</h2>'
                },{
                    xtype:'textfield'
                    ,fieldLabel:'Email'
                    ,name:'email'
                    ,anchor:'100%'
                },{
                    xtype:'textfield'
                    ,fieldLabel:'Website'
                    ,name:'website'
                    ,anchor:'100%'
                },{
                    xtype:'textfield'
                    ,fieldLabel:'Contact Name'
                    ,name:'contact_name'
                    ,anchor:'100%'
                },{
                    xtype:'textfield'
                    ,fieldLabel:'Phone Number'
                    ,name:'phone_1'
                    ,anchor:'100%'
                },{
                    xtype:'textfield'
                    ,fieldLabel:'Phone Number 2'
                    ,name:'phone_2'
                    ,anchor:'100%'
                }]
            }]
        },{
            xtype: 'container'
            ,layout:'hbox'
            ,align:'stretch'
            ,defaults: {
                labelWidth:120
            }
            ,items:[{
                xtype: 'container'
                ,layout: 'form'
                ,flex: 1
                ,style: 'padding:20px;'
                ,items: [{
                    html: '<h2>Location</h2>'
                }, {
                    xtype: 'textfield'
                    ,fieldLabel: 'Street Address'
                    ,name: 'address_1'
                    ,anchor: '100%'
                }, {
                    xtype: 'textfield'
                    ,fieldLabel: 'Suburb'
                    ,name: 'address_2'
                    ,anchor: '100%'
                }, {
                    xtype: 'simplecrm-combo-region'
                    ,fieldLabel: 'Region'
                    ,name: 'address_3'
                    ,hiddenName: 'address_3'
                    ,anchor: '100%'

                }]
            }, {
                xtype: 'container'
                , layout: 'form'
                , flex: 1
                , style: 'padding:20px;'
                , items: [{
                    html: '<h2>Miscellaneous</h2>'
                }, {
                    xtype: 'textfield'
                    , fieldLabel: 'Year Established'
                    , name: 'year_established'
                    , anchor: '100%'
                }, {
                    xtype: 'textarea'
                    , fieldLabel: 'Extra Information'
                    , name: 'extra_info'
                    , anchor: '100%'
                }]
            }]
        },{
            html:'<h2>Contact Response Records</h2>'
        }]
        ,tbar:[{
            text: 'Back to Contact List'
            ,xtype: 'button'
            ,id: 'back-to-grid-button'
            ,listeners: {
                'click': {fn: this.loadContactGrid, scope:this}
            }
        },{
            xtype: 'modx-actionbuttons'
            ,items:[{
                xtype:'button'
                ,text: 'Save'
                ,listeners: {
                    'click': {fn:this.saveContact, scope:this}
                }
            }, {
                xtype:'button'
                ,text:'Apply Changes'
                ,listeners: {
                    'click': {fn:this.applyChanges, scope:this}
                }
            },{
                xtype:'button'
                ,text: 'Close'
                ,listeners: {
                    'click': {fn: this.loadContactGrid, scope:this}
                }
            }]
        }]
    });
    SimpleCRM.panel.Contact.superclass.constructor.call(this,config);
};
Ext.extend(SimpleCRM.panel.Contact,MODx.FormPanel, {
    loadContactGrid: function() {
        Ext.getCmp('simplecrm-panel-home').loadContactGrid();
    },saveContact: function() {
        this.submit();
        this.on('success', function() {
            console.log('eventname thrown', arguments);
            this.loadContactGrid();
        });
    },applyChanges: function() {
        this.submit();
    }
});
Ext.reg('simplecrm-panel-contact',SimpleCRM.panel.Contact);