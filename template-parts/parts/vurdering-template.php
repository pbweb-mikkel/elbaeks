
<div class="boligModalWrap" id="vurdering">
	<div class="boligModalWrap__overlay"></div>
	<div class="boligModal">
		<svg class="closeModal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
			<polygon class="cls-1" points="24 9.4 22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4"/>
		</svg>
		<h3>Bestil vurdering</h3>
		<form class="modalForm" id="vurdering_form">
			<div class="singleField">
				<label for="navn">Navn*</label>
				<input type="text" id="navn" name="navn" required autocomplete="none">
			</div>
			<div class="singleField singleField--autocomplete singleField--autocompleteFull singleField--singleComplete inputShowFront" data-action="adresser">
				<label for="address-autocomplete">Adresse*</label>
				<div class="autocompleteFields">
					<div class="currentValueEntered"></div>
					<input type="text" class="valueAutocomplete" id="address-autocomplete" name="address-autocomplete" tabindex="0" autocomplete="none">
					<ul class="autocompleteList"></ul>
				</div>
                <input type="text" class="realValue" id="address" name="address" autocomplete="none" tabindex="-1">
                <input type="hidden" id="addressID" name="addressID" autocomplete="none" tabindex="-1">
			</div>
<!-- 			<div class="singleField singleField--autocomplete singleField--half singleFieldBy" data-action="postnumre">
				<label for="postnr">Postnummer*</label>
				<div class="autocompleteFields">
					<input type="text" class="realValue" id="postnr" name="postnr">
					<div class="currentValueEntered"></div>
					<input type="text" class="valueAutocomplete" required>
					<ul class="autocompleteList"></ul>
				</div>
			</div>
			<div class="singleField singleField--autocomplete singleField--half singleFieldBy" data-action="supplerendebynavne2">
				<label for="by">By*</label>
				<div class="autocompleteFields">
					<input type="text" class="realValue" id="by" name="by">
					<div class="currentValueEntered"></div>
					<input type="text" class="valueAutocomplete" required>
					<ul class="autocompleteList"></ul>
				</div>
			</div> -->
			<div class="singleField">
				<label for="telefon">Mobil*</label>
				<div class="singleField__mobile">
					<div class="singleField__mobile__area">
						<?php get_template_part('template-parts/parts/area-code', 'part'); ?>
					</div>
					<input type="tel" id="telefon" name="telefon" required autocomplete="none">
				</div>
			</div>
			<div class="singleField">
				<label for="email">E-mail*</label>
				<input type="email" id="email" name="email" required autocomplete="none">
			</div>
			<div class="modalForm__checkbox">
				<h5>Vælg</h5>
				<div class="singleCheckbox">
					<input type="radio" value="le@elbaeks.dk" name="realtor" id="modal_radio_1" class="checkboxInput"/>
					<label for="modal_radio_1">
						<div class="checkboxLabel">
							<svg viewBox="0,0,50,50">
								<path d="M5 30 L 20 45 L 45 5"></path>
							</svg>
						</div>
						<span>Lars Elbæk</span>
					</label>
				</div>
				<div class="singleCheckbox">
					<input type="radio" value="fe@elbaeks.dk" name="realtor" id="modal_radio_2" class="checkboxInput"/>
					<label for="modal_radio_2">
						<div class="checkboxLabel">
							<svg viewBox="0,0,50,50">
								<path d="M5 30 L 20 45 L 45 5"></path>
							</svg>
						</div>
						<span>Farnaz Elbæk</span>
					</label>
				</div>
				<div class="singleCheckbox">
					<input type="radio" value="" name="realtor" id="modal_radio_3" class="checkboxInput"/>
					<label for="modal_radio_3">
						<div class="checkboxLabel">
							<svg viewBox="0,0,50,50">
								<path d="M5 30 L 20 45 L 45 5"></path>
							</svg>
						</div>
						<span>Ingen præferencer</span>
					</label>
				</div>
			</div>
			<div class="singleField">
				<label for="onsker">Kommentar</label>
				<textarea name="onsker" id="onsker" rows="3"></textarea>
			</div>
			<div class="buttonCenter">
                <div id="vurdering-loading" style="display: none;text-align: center;"><img src="<?= get_stylesheet_directory_uri() ?>/img/loading.gif" width="40" height="40"></div>
				<button class="button button--brown button--arrow" type="submit"><span>Send</span></button>
				<div class="successText">Tak for dit ønske om en vurdering. Vi bekræfter modtagelse heraf og vi kontakter dig hurtigst muligt.</div>
                <div class="errorText">Der er sket en fejl med din henvendelse. Du kan kontakte mægleren direkte på mail eller telefon istedet.</div>
			</div>
            <?php $consent = Flexyapress_API::getConsents('SalesValuation') ?>
            <input type="hidden" name="consentIdGlobal" value="<?= $consent['id'] ?>">
            <input type="hidden" name="shopNo" value="99">
		</form>
	</div>
</div>