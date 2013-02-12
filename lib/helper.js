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
  },
  getLongMonthName: function(number){
    switch(number){
      case 1:
        return 'January';
      case 2:
        return 'February';
      case 3:
        return 'March';
      case 4:
        return 'April';
      case 5:
        return 'May';
      case 6:
        return 'June';
      case 7:
        return 'Junly';
      case 8:
        return 'August';
      case 9:
        return 'September';
      case 10:
        return 'October';
      case 11:
        return 'November';
      case 12:
        return 'December';
    }
  }
};
String.prototype.capitaliseFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};
String.prototype.trunc = function(n){
    return this.substr(0,n-1)+(this.length>n?'&hellip;':'');
};
