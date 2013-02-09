AppHelper = {
  isPhone: function(){
    return (Ext.getBody().getSize().width <= 720)
  },
  getHour12: function(h){
    var hour = h,
        ap = 'AM';
        if(h > 12){
          hour = h - 12;
          ap = 'PM';
        }
    return {hour: hour, ap: ap}
  },
  showToast: function(container, message){
    var toast = Ext.getCmp('toast');
    toast.setHtml(message);
    toast.show('fade');
    setTimeout(function(){toast.hide()}, 2000);
  }
};
String.prototype.capitaliseFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};
String.prototype.trunc = function(n){
    return this.substr(0,n-1)+(this.length>n?'&hellip;':'');
};
