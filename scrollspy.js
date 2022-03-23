// Function wird ausgeführt, sobald das Dokument vollständig geladen ist.
$(document).ready(function() {

     // Click-Listener allen Elementen mit der Klasse 'scroll' hinzufügen.
     $(".scroll").on('click', function(event) {
  
        // Standardaktion unterdrücken
        event.preventDefault();
  
        var hash = this.hash;
  
        $('html, body').animate( {
          scrollTop: $(hash).offset().top
        }, 1000, function() {
            window.location.hash = hash;
        });
    });

    // Speichern aller Elemente mit der Klasse 'scroll' in einem Array
    let sections = $('.scroll');
  
    // Document einen Scroll-Listener hinzufügen
    $(document).scroll(function() {

        // Durchlaufen des Arrays
        sections.each(function() {
  
            var section = $(this).attr('href'); // 'this' bezieht sich auf das aktuelle Element aus dem Array
            var sectionOffset = $(section).offset().top; // Position des aktuellen Elements zum oberen Rand
            var sectionHeight = $(section).outerHeight(); // Äußere Höhe des aktuellen Elements
            var sectionBottom = sectionOffset + sectionHeight; // Berechnung des Bottom-Wertes des aktuellen Elements
            var scrollPos = $(document).scrollTop(); // Position der Scrollbar von oben
      
            if(scrollPos < sectionBottom - 30 && scrollPos >= sectionOffset - 30) {
                // Aktuellem Element die Klasse 'active' hinzufügen
                $(this).addClass('active');
            } else{
                // Klasse 'active' vom aktuellen Element entfernen.
                $(this).removeClass('active');
            }
        });
    });
});