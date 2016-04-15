$j.ajaxSetup({ async: false });  

$j("<div></div>").load("tail.html",function(){
	document.write(this.innerHTML.match(/<xmp>([\s\S]*?)<\/xmp>/)[1]);
	IsReady=2;
});

$j.ajaxSetup({ async: true });

+function ($j) {
  $j(function(){
	// class
	$j(document).on('click', '[data-toggle^="class"]', function(e){
	  e && e.preventDefault();
	  var $this = $j(e.target), $class , $target, $tmp, $classes, $targets;
	  !$this.data('toggle') && ($this = $this.closest('[data-toggle^="class"]'));
	  $class = $this.data()['toggle'];
	  $target = $this.data('target') || $this.attr('href');
	  $class && ($tmp = $class.split(':')[1]) && ($classes = $tmp.split(','));
	  $target && ($targets = $target.split(','));
	  $classes && $classes.length && $j.each($targets, function( index, value ) {
		if ( $classes[index].indexOf( '*' ) !== -1 ) {
		  var patt = new RegExp( '\\s' + 
			  $classes[index].
				replace( /\*/g, '[A-Za-z0-9-_]+' ).
				split( ' ' ).
				join( '\\s|\\s' ) + 
			  '\\s', 'g' );
		  $j($this).each( function ( i, it ) {
			var cn = ' ' + it.className + ' ';
			while ( patt.test( cn ) ) {
			  cn = cn.replace( patt, ' ' );
			}
			it.className = $j.trim( cn );
		  });
		}
		($targets[index] !='#') && $j($targets[index]).toggleClass($classes[index]) || $this.toggleClass($classes[index]);
	  });
	  $this.toggleClass('active');
	});

	// collapse nav
	$j(document).on('click', 'nav a', function (e) {
	  var $this = $j(e.target), $active;
	  $this.is('a') || ($this = $this.closest('a'));
	  
	  $active = $this.parent().siblings( ".active" );
	  $active && $active.toggleClass('active').find('> ul:visible').slideUp(200);
	  
	  ($this.parent().hasClass('active') && $this.next().slideUp(200)) || $this.next().slideDown(200);
	  $this.parent().toggleClass('active');
	  
	  $this.next().is('ul') && e.preventDefault();

	  setTimeout(function(){ $j(document).trigger('updateNav'); }, 300);      
	});
  });
}(jQuery);

document.write('</body>');
document.write('</html>');
	