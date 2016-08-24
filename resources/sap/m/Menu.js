/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2016 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','./library','sap/ui/core/Control','./Button','./Dialog','./NavContainer','./List','./Page','./MenuListItem','sap/ui/unified/Menu','sap/ui/Device','sap/ui/core/EnabledPropagator'],function(q,l,C,B,D,N,L,P,M,U,a,E){"use strict";var b=C.extend("sap.m.Menu",{metadata:{library:"sap.m",properties:{title:{type:"string",group:"Misc",defaultValue:null}},defaultAggregation:"items",aggregations:{items:{type:"sap.m.MenuItem",multiple:true,singularName:"item",bindable:"bindable"},_dialog:{type:"sap.m.Dialog",multiple:false,visibility:"hidden"},_menu:{type:"sap.ui.unified.Menu",multiple:false,visibility:"hidden"}},events:{itemSelected:{parameters:{item:{type:"sap.m.MenuItem"}}},closed:{}}}});E.call(b.prototype);b.UNIFIED_MENU_ITEMS_ID_SUFFIX='-unifiedmenu';b.LIST_ITEMS_ID_SUFFIX='-menuinnerlist';b.prototype.init=function(){if(a.system.phone){this._initDialog();}this._bIsInitialized=false;};b.prototype.exit=function(){if(this._navContainerId){this._navContainerId=null;}if(this._bIsInitialized){this._bIsInitialized=null;}if(this._getMenu()&&this._getMenu().getPopup()){this._getMenu().getPopup().detachClosed(this._menuClosed,this);}};b.prototype.invalidate=function(){};b.prototype.setTitle=function(t){var n=this._getNavContainer();this.setProperty("title",t,true);if(n&&n.getPages().length){n.getPages()[0].setTitle(t);}return this;};b.prototype.openBy=function(o,w){if(a.system.phone){if(!this._bIsInitialized){this._initAllPages();this._bIsInitialized=true;}this._getNavContainer().to(this._getNavContainer().getPages()[0]);this._getDialog().open();}else{if(!this._bIsInitialized){this._initAllMenuItems();this._bIsInitialized=true;}var e=sap.ui.core.Popup.Dock;this._getMenu().open(w,o,e.BeginTop,e.BeginBottom,o,"0 -2");}};b.prototype.close=function(){if(sap.ui.Device.system.phone){this._getDialog().close();}else{this._getVisualParent().close();}};b.prototype._initDialog=function(){var d=new D({showHeader:false,stretch:true,content:this._initNavContainer(),buttons:[this._initCloseButton()]});d.addStyleClass("sapMRespMenuDialog");this.setAggregation("_dialog",d,true);};b.prototype._getDialog=function(){return this.getAggregation("_dialog");};b.prototype._initAllMenuItems=function(){this._initMenuForItems(this.getItems());};b.prototype._initMenuForItems=function(i,p){var m=new U();m.isCozy=this._isMenuCozy.bind(this,m);m.addStyleClass('sapMMenu');i.forEach(function(I){this._addVisualMenuItemFromItem(I,m);}.bind(this));if(p){p.setSubmenu(m);}else{m.getPopup().attachClosed(this._menuClosed,this);this.setAggregation('_menu',m,true);}m.attachItemSelect(this._handleMenuItemSelect,this);};b.prototype._menuClosed=function(){this.fireClosed();};b.prototype._getMenu=function(){return this.getAggregation("_menu");};b.prototype._initCloseButton=function(){var r=sap.ui.getCore().getLibraryResourceBundle("sap.m");return new B({text:r.getText("MENU_CLOSE"),press:f.bind(this)});};function f(){this._getDialog().close();}b.prototype._initNavContainer=function(){var n=new N();this._navContainerId=n.getId();return n;};b.prototype._getNavContainer=function(){return sap.ui.getCore().byId(this._navContainerId);};b.prototype._initAllPages=function(){this._initPageForParent(this);};b.prototype._initPageForParent=function(p){var i=p.getItems(),d=p instanceof sap.m.Menu,s=d?p.getTitle():p.getText(),o=new L({mode:sap.m.ListMode.None}),e=new P({title:s,showNavButton:!d,content:o});if(!d){this._setBackButtonTooltipForPageWithParent(p,e);}e.attachNavButtonPress(function(){this._getNavContainer().back();},this);this._getNavContainer().addPage(e);i.forEach(function(I){this._addListItemFromItem(I,e);},this);this._updateListInset(o);o.attachEvent("itemPress",this._handleListItemPress,this);return e;};b.prototype._handleListItemPress=function(e){var o=e.getParameter("listItem"),m=sap.ui.getCore().byId(o.getMenuItem()),p=m._getVisualChild();if(p){this._getNavContainer().to(p);}else{this._getDialog().close();this.fireItemSelected({item:m});}};b.prototype._setBackButtonTooltipForPageWithParent=function(p,o){var d=p.getParent(),r=sap.ui.getCore().getLibraryResourceBundle("sap.m"),s;s=d instanceof sap.m.Menu?d.getTitle():d.getText();s=r.getText("MENU_PAGE_BACK_BUTTON")+" "+s;o.setNavButtonTooltip(s);};b.prototype._createMenuListItemFromItem=function(i){return new M({id:this._generateListItemId(i.getId()),type:sap.m.ListType.Active,icon:i.getIcon(),title:i.getText(),startsSection:i.getStartsSection(),menuItem:i,tooltip:i.getTooltip()});};b.prototype._createVisualMenuItemFromItem=function(i){return new sap.ui.unified.MenuItem({id:this._generateUnifiedMenuItemId(i.getId()),icon:i.getIcon(),text:i.getText(),startsSection:i.getStartsSection(),tooltip:i.getTooltip()});};b.prototype._addVisualMenuItemFromItem=function(i,m,I){var o=this._createVisualMenuItemFromItem(i);i._setVisualParent(m);i._setVisualControl(o);var e=['aggregationChanged','propertyChanged'];e.forEach(function(s){var d='_on'+s.slice(0,1).toUpperCase()+s.slice(1);i.attachEvent(s,this[d],this);},this);if(i.getItems().length!==0){this._initMenuForItems(i.getItems(),o);i._setVisualChild(i.getItems()[0]._getVisualParent());}if(I===undefined){m.addItem(o);}else{m.insertItem(o,I);}};b.prototype._addListItemFromItem=function(i,p,I){var m=this._createMenuListItemFromItem(i),o=p.getContent()[0];i._setVisualParent(p);i._setVisualControl(m);var e=['aggregationChanged','propertyChanged'];e.forEach(function(s){var d='_on'+s.slice(0,1).toUpperCase()+s.slice(1);i.attachEvent(s,this[d],this);},this);if(i.getItems().length!==0){this._initPageForParent(i);i._setVisualChild(i.getItems()[0]._getVisualParent());}if(I===undefined){o.addItem(m);}else{o.insertItem(m,I);}o.rerender();};b.prototype._addVisualItemFromItem=function(i,o,I){if(!o){return;}if(a.system.phone){this._addListItemFromItem(i,o,I);var d=o.getContent()[0];this._updateListInset(d);}else{this._addVisualMenuItemFromItem(i,o,I);}};b.prototype._updateListInset=function(o){var h=false,I="sapMListIcons",d=o.getItems();for(var i=0;i<d.length;i++){if(d[i].getIcon()){h=true;break;}}if(h){o.addStyleClass(I);}else{o.removeStyleClass(I);}};b.prototype._handleMenuItemSelect=function(e){var u=e.getParameter("item"),m;if(!u){return;}m=this._findMenuItemByUnfdMenuItem(u);if(m&&!m.getItems().length){this.fireItemSelected({item:m});}};b.prototype._generateListItemId=function(m){return m+b.LIST_ITEMS_ID_SUFFIX;};b.prototype._generateUnifiedMenuItemId=function(m){return m+b.UNIFIED_MENU_ITEMS_ID_SUFFIX;};b.prototype._findMenuItemByUnfdMenuItem=function(u){var d=[],o=u,I,e,i;do{d.push(o.getId());o=o.getParent().getParent();}while(o instanceof sap.ui.unified.MenuItem);I=this.getItems();do{e=d.pop();for(i=0;i<I.length;i++){if(I[i]._getVisualControl()===e){if(d.length===0){return I[i];}else{I=I[i].getItems();break;}}}}while(d.length);return null;};b.prototype._isMenuCozy=function(m){if(!m.bCozySupported){return false;}if(m.hasStyleClass("sapUiSizeCozy")){return true;}if(c(m.oOpenerRef)){return true;}return false;};function c(r){if(!r){return false;}r=r.$?r.$():q(r);var $=r.closest(".sapUiSizeCompact,.sapUiSizeCondensed,.sapUiSizeCozy");return(!$.hasClass("sapUiSizeCompact")&&!$.hasClass("sapUiSizeCondensed"))||$.hasClass("sapUiSizeCozy");}b.prototype.addAggregation=function(A,o,s){C.prototype.addAggregation.apply(this,arguments);if(A==="items"){this._addVisualItemFromItem(o,this._getVisualParent());}return this;};b.prototype.insertAggregation=function(A,o,i,s){C.prototype.insertAggregation.apply(this,arguments);if(A==="items"){this._addVisualItemFromItem(o,this._getVisualParent(),i);}return this;};b.prototype.removeAggregation=function(A,o,s){var i=C.prototype.removeAggregation.apply(this,arguments);if(A==="items"){this._removeVisualItem(i);}return i;};b.prototype.removeAllAggregation=function(A,s){var I=C.prototype.removeAllAggregation.apply(this,arguments);if(A==="items"){for(var i=0;i<I.length;i++){this._removeVisualItem(I[i]);}}return I;};b.prototype._removeVisualItem=function(i,p){var v=sap.ui.getCore().byId(i._getVisualControl()),m,o;if(v){m=v.getParent();m.removeItem(v);if(a.system.phone){this._removeSubPageForItem(i);if(m.getItems().length===0){o=sap.ui.getCore().byId(i._getVisualParent());this._getNavContainer().removePage(o);o.destroy();if(p){p._setVisualChild(null);sap.ui.getCore().byId(p._getVisualControl()).rerender();}}if(m){m.rerender();}}}};b.prototype.destroyAggregation=function(A,s){if(A==="items"){for(var i=0;i<this.getItems().length;i++){this._removeVisualItem(this.getItems()[i]);}}return C.prototype.destroyAggregation.apply(this,arguments);};b.prototype._removeSubPageForItem=function(I,s){var S;if(!s){for(var i=0;i<I.getItems().length;i++){this._removeSubPageForItem(I.getItems()[i]);}}if(I._getVisualChild()){S=sap.ui.getCore().byId(I._getVisualChild());if(this._getNavContainer()&&S){this._getNavContainer().removePage(S);}!!S&&S.destroy();}};b.prototype._getVisualParent=function(){var n=this._getNavContainer(),m=this._getMenu();if(n&&n.getPages().length){return n.getPages()[0];}else{return m;}};b.prototype._onPropertyChanged=function(e){var p=e.getParameter("propertyKey"),o=e.getParameter("propertyValue");if(a.system.phone){if(p==='text'){p='title';}var s=this._generateListItemId(e.getSource().getId());!!s&&sap.ui.getCore().byId(s).setProperty(p,o);if(this._getDialog().isOpen()){this._getDialog().close();}}else{var u=this._generateUnifiedMenuItemId(e.getSource().getId());!!u&&sap.ui.getCore().byId(u).setProperty(p,o);}};b.prototype._onAggregationChanged=function(e){var A=e.getParameter("aggregationName");switch(A){case'items':this._onItemsAggregationChanged(e);break;}};b.prototype._onItemsAggregationChanged=function(e){var I=e.getSource(),m=e.getParameter("methodName"),d=e.getParameter("methodParams"),g;if(m==="add"||m==="insert"){if(m==="insert"){g=d.index;}this._addOrInsertItem(I,d.item,g);}if(m==="remove"){this._removeVisualItem(d.item,I);}if(m==="removeall"){for(var i=0;i<d.items.length;i++){this._removeVisualItem(d.items[i],I);}}if(m==="destroy"){this._destroyItem(I);}};b.prototype._addOrInsertItem=function(p,n,i){var o;if(p._getVisualChild()){this._addVisualItemFromItem(n,sap.ui.getCore().byId(p._getVisualChild()),i);}else{if(a.system.phone){this._initPageForParent(p);p._setVisualChild(p.getItems()[0]._getVisualParent());o=sap.ui.getCore().byId(p._getVisualControl());o.rerender();}else{this._initMenuForItems(p.getItems(),sap.ui.getCore().byId(p._getVisualControl()));p._setVisualChild(p.getItems()[0]._getVisualParent());}}};b.prototype._destroyItem=function(i){var v=sap.ui.getCore().byId(i._getVisualControl());if(v&&v.setMenuItem){v.setMenuItem(null);}this._removeSubPageForItem(i,true);i._setVisualChild(null);if(v&&v.setMenuItem){v.rerender();v.setMenuItem(i);}};b.prototype.getDomRefId=function(){if(a.system.phone){return this._getDialog().getId();}else{return this._getMenu().getId();}};return b;},true);
