!function(a){Craft.SiteAdminTable=Craft.AdminTable.extend({confirmDeleteModal:null,$rowToDelete:null,$deleteActionRadios:null,$deleteSubmitBtn:null,$deleteSpinner:null,_deleting:!1,confirmDeleteItem:function(b){return this.confirmDeleteModal&&(this.confirmDeleteModal.destroy(),delete this.confirmDeleteModal),this._createConfirmDeleteModal(b),Garnish.isMobileBrowser(!0)||setTimeout(a.proxy(function(){this.$deleteActionRadios.first().focus()},this),100),!1},validateDeleteInputs:function(){var a=this.$deleteActionRadios.eq(0).prop("checked")||this.$deleteActionRadios.eq(1).prop("checked");return a?this.$deleteSubmitBtn.removeClass("disabled"):this.$deleteSubmitBtn.addClass("disabled"),a},submitDeleteLocale:function(b){if(b.preventDefault(),!this._deleting&&this.validateDeleteInputs()){this.$deleteSubmitBtn.addClass("active"),this.$deleteSpinner.removeClass("hidden"),this.disable(),this._deleting=!0;var c={id:this.getItemId(this.$rowToDelete)};this.$deleteActionRadios.eq(0).prop("checked")&&(c.transferContentTo=this.$transferSelect.val()),Craft.postActionRequest(this.settings.deleteAction,c,a.proxy(function(a,b){"success"==b&&(this._deleting=!1,this.enable(),this.confirmDeleteModal.hide(),this.handleDeleteItemResponse(a,this.$rowToDelete))},this))}},_createConfirmDeleteModal:function(b){this.$rowToDelete=b;var c=this.getItemId(b),d=this.getItemName(b),e=a('<form id="confirmdeletemodal" class="modal fitted" method="post" accept-charset="UTF-8">'+Craft.getCsrfInput()+'<input type="hidden" name="action" value="localization/deleteLocale"/><input type="hidden" name="id" value="'+c+'"/></form>').appendTo(Garnish.$bod),f=a('<div class="body"><p>'+Craft.t("app","What do you want to do with any content that is only available in {language}?",{language:d})+'</p><div class="options"><label><input type="radio" name="contentAction" value="transfer"/> '+Craft.t("app","Transfer it to:")+'</label> <div id="transferselect" class="select"><select/></div></div><div><label><input type="radio" name="contentAction" value="delete"/> '+Craft.t("app","Delete it")+"</label></div></div>").appendTo(e),g=a('<div class="buttons right"/>').appendTo(f),h=a('<div class="btn">'+Craft.t("app","Cancel")+"</div>").appendTo(g);this.$deleteActionRadios=f.find("input[type=radio]"),this.$transferSelect=a("#transferselect > select"),this.$deleteSubmitBtn=a('<input type="submit" class="btn submit disabled" value="'+Craft.t("app","Delete {site}",{site:d})+'" />').appendTo(g),this.$deleteSpinner=a('<div class="spinner hidden"/>').appendTo(g);for(var i=0;i<Craft.sites.length;i++)Craft.sites[i].id!=c&&this.$transferSelect.append('<option value="'+Craft.sites[i].id+'">'+Craft.sites[i].name+"</option>");this.confirmDeleteModal=new Garnish.Modal(e),this.addListener(h,"click",function(){this.confirmDeleteModal.hide()}),this.addListener(this.$deleteActionRadios,"change","validateDeleteInputs"),this.addListener(e,"submit","submitDeleteLocale")}})}(jQuery);
//# sourceMappingURL=SiteAdminTable.js.map