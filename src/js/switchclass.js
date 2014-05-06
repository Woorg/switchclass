(function($) {
    
    $.fn.switchClass = function (class_a, class_b) {
        
        if (this.hasClass(class_a)) {
            this.removeClass(class_a).addClass(class_b)
        } else if (this.hasClass(class_b)) {
            this.removeClass(class_b).addClass(class_a)
        }
        
        return this
    }
 
}(jQuery));