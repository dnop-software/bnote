<?php

/**
 * Fast an easy way to print tuff.
 * @author matti
 *
 */
class Writing {
	
	private static function createOutput($caption, $level, $css_classes="") {
		$css = "";
		if($css_classes != "") {
			$css = ' class="' . $css_classes . '"'; 
		}
		return "<h" . $level . $css . ">" . $caption . "</h" . $level . ">\n"; 
	}
	
	/**
	 * Convenience method to print an h1.
	 * @param String $caption Content/text of the header.
	 * @param String $css_classes CSS classes that can be added to the header
	 */
	public static function h1($caption, $css_classes="") {
		echo Writing::createOutput($caption, 1, $css_classes);
	}
	
	/**
	 * Convenience method to print an h2.
	 * @param String $caption Content/text of the header.
	 * @param String $css_classes CSS classes that can be added to the header
	 */
	public static function h2($caption, $css_classes="") {
		echo Writing::createOutput($caption, 2, $css_classes);
	}
	
	/**
	 * Convenience method to print an h3.
	 * @param String $caption Content/text of the header.
	 * @param String $css_classes CSS classes that can be added to the header
	 */
	public static function h3($caption, $css_classes="") {
		echo Writing::createOutput($caption, 3, $css_classes);
	}
	
	/**
	 * Convenience method to print an h4.
	 * @param String $caption Content/text of the header.
	 * @param String $css_classes CSS classes that can be added to the header
	 */
	public static function h4($caption, $css_classes="") {
		echo Writing::createOutput($caption, 4, $css_classes);
	}
	
	/**
	 * Convenience method to print a p-tag with enclosed text.
	 * @param String $text Text to print.
	 */
	public static function p($text) {
		echo "<p>" . $text . "</p>\n";
	}
	
	/**
	 * Convenience method to print an img-tag.
	 * @param String $src Image file path on server.
	 * @param String $alt Alternative description.
	 */
	public static function img($src, $alt) {
		echo '<img src="' . $src . '" alt="' . $alt . '" />' . "\n";
	}
	
	/**
	 * Shows a full-width message with a green background.
	 * @param String $message Message to display.
	 */
	public static function info($message) {
		$this->message($message, 'info');
	}
	
	/**
	 * Shows a full-width warning with a yellow/orange background.
	 * @param String $message Message to display.
	 */
	public static function warning($message) {
		$this->message($message, 'warning');
	}
	
	/**
	 * Shows a full-width message.
	 * @param String $message Message to show.
	 * @param Enum $type info, warn
	 */
	public static function message($message, $type) {
		?>
		<div class="flash_message <?php echo $type; ?>"><?php echo $message; ?></div>
		<?php
	}
}

?>