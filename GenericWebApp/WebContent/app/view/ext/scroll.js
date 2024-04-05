jQuery(function ($) {

    /**
     * This small plugin will scrollTo a target, smoothly
     *
     * First argument = time to scroll to the target
     * Second argument = set the hash in the current url?
     */
    $.fn.smoothScroll = function(t, setHash, callback) {
        // Set time to t variable to if undefined 500 for 500ms transition
        t = t || 1000;
        setHash = (typeof setHash == 'undefined') ? true : setHash;
    
        // Return this as a proper jQuery plugin
        return this.each(function() {
            $('html, body').animate({
                scrollTop: $(this).offset().top
            }, t, callback);
    
            // Lets set the hash to the current ID since if an event was prevented this doesn't get done
            if (this.id && setHash) {
                window.location.hash = this.id;
            }
        });
    };

});