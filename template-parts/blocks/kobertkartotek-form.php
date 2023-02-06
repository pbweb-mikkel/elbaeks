<div class="kobert">
    <div class="container">
        <div class="row row--reverse">
            <div class="col-12">
                <div class="mobileTitle"><?php the_field( 'title' ); ?></div>
            </div>
            <div class="col-12 col-lg-6">
                <?php if(get_field( 'image' ))
                    printf(
                        '<div class="kobert__image"><img  data-src="%s" class="lazyload" alt="%s" /></div>',
                        get_field( 'image' )['sizes']['large'],
                        get_field( 'image' )['alt']
                    );
                ?>
                <div class="kobertText">
                    <?php if(get_field( 'additional_text' )): ?>
                        <?php the_field( 'additional_text' ); ?>
                    <?php endif; ?>
                    <?php if(get_field( 'button_text' ))
                        printf(
                            '<a href="#" data-target="vurdering" class="button button--brown button--arrow openPopup"><span>%s</span></a>',
                            get_field( 'button_text' )
                        );
                    ?>
                </div>
            </div>
            <div class="col-12 col-lg-6">
                <div class="kobertContent">
                    <h1 class="desktopTitle"><?php the_field( 'title' ); ?></h1>
                    <?php the_field( 'text' ); ?>
                    <form class="form" id="kobertkartotekForm">
                        <div class="singleField">
                            <label for="fortal">Fortæl os lidt om dig og dine ønsker</label>
                            <div class="singleField__textarea">
                                <textarea name="fortal" id="fortal" rows="3"></textarea>
                                <span class="textareaLabel"><?php the_field( 'fortael_os_placeholder_text' ); ?></span>
                            </div>
                        </div>
                        <h4>Specifikke krav</h4>
                        <div class="singleField singleFieldSelect">
                            <label for="storrelse">Boligstørrelse i m<sup>2</sup>*</label>
                            <input type="text" class="singleFieldSelect--input" id="storrelse" name="storrelse" value="0-150" required autocomplete="none">
                            <div class="singleSelect singleSelect--multiple">
                                <div class="singleSelect__selected"><span>0m<sup>2</sup>-150m<sup>2</sup></span></div>
                                <ul class="singleSelect__list">
                                    <li data-value="0-150">0m<sup>2</sup>-150m<sup>2</sup></li>
                                    <li data-value="150-250">150m<sup>2</sup>-250m<sup>2</sup></li>
                                    <li data-value="250-400">250m<sup>2</sup>-400m<sup>2</sup></li>
                                    <li data-value="500-999999"><500m<sup>2</sup></li>
                                </ul>
                            </div>
                        </div>
                        <!--<div class="singleField singleFieldSelect">
                            <label for="storrelse">Minimum antal værelser</label>
                            <input type="text" class="singleFieldSelect--input" id="rooms" name="rooms" value="1" required autocomplete="none">
                            <div class="singleSelect singleSelect--single">
                                <div class="singleSelect__selected"><span>1</span></div>
                                <ul class="singleSelect__list">
                                    <li data-value="1">1</li>
                                    <li data-value="2">2</li>
                                    <li data-value="3">3</li>
                                    <li data-value="4">4</li>
                                    <li data-value="5">5</li>
                                    <li data-value="6">6</li>
                                    <li data-value="7">7</li>
                                    <li data-value="8">8</li>
                                </ul>
                            </div>
                        </div>-->
                        <div class="singleField singleFieldSelect">
                            <label for="grundstorrelse">Grundstørrelse i m<sup>2</sup>*</label>
                            <input type="text" class="singleFieldSelect--input" id="grundstorrelse" value="0-1000" name="grundstorrelse" required autocomplete="none">
                            <div class="singleSelect singleSelect--multiple">
                                <div class="singleSelect__selected"><span>0m<sup>2</sup>-1000m<sup>2</sup></span></div>
                                <ul class="singleSelect__list">
                                    <li data-value="0-1000">0m<sup>2</sup>-1000m<sup>2</sup></li>
                                    <li data-value="1000-1500">1000m<sup>2</sup>-1500m<sup>2</sup></li>
                                    <li data-value="1500-2500">1500m<sup>2</sup>-2500m<sup>2</sup></li>
                                    <li data-value="2500-5000">2500m<sup>2</sup>-5000m<sup>2</sup></li>
                                    <li data-value="5000-9999999"><5000m<sup>2</sup></li>
                                </ul>
                            </div>
                        </div>
                        <div class="singleField singleFieldSelect">
                            <label for="kontaktpris">Kontantpris maks. kr.*</label>
                            <input type="text" class="singleFieldSelect--input" id="kontaktpris" name="kontaktpris" required autocomplete="none">
                            <div class="singleSelect singleSelect--multiple">
                                <div class="singleSelect__selected" data-text="Kontantpris i millioner kr.: (sæt mindst ét kryds)"><span>Kontantpris i millioner kr.: (sæt mindst ét kryds)</span></div>
                                <ul class="singleSelect__list">
                                    <li data-value="0-15">0-15</li>
                                    <li data-value="15-20">15-20</li>
                                    <li data-value="20-30">20-30</li>
                                    <li data-value="30-40">30-40</li>
                                    <li data-value="40-60">40-60</li>
                                    <li data-value="60-80">60-80</li>
                                    <li data-value="80-100">80-100</li>
                                    <li data-value="100-150">100-150</li>
                                    <li data-value="150-250">150-250</li>
                                    <li data-value="0-999">Andet</li>
                                </ul>
                            </div> 
                        </div>
                        <!--<div class="singleField singleField--autocomplete singleField--autocompleteFull" data-action="adresser">-->
                        <div class="singleField singleField--autocomplete singleField--autocompleteFull" data-action="locations">
                            <label for="beliggenhed">Beliggenhed*</label>
                            <div class="autocompleteFields">
                                <input type="text" class="realValue" id="beliggenhed" name="beliggenhed" required autocomplete="none">
                                <div class="currentValueEntered">Skriv postnummer eller by – gerne flere</div>
                                <input type="text" class="valueAutocomplete beliggenhed" autocomplete="none">
                                <!-- <input type="text" class="valueAutocomplete beliggenhed" placeholder="Skriv postummer eller by – gerne flere"> -->
                                <ul class="autocompleteList"></ul>
                            </div>
                        </div>

                        <h4>Ejendomstyper</h4>
                        <div class="kobertCheckboxWrap">
                            <div class="kobert__checkbox">
                                <div class="singleCheckbox">
                                    <input type="checkbox" name="ejendomstyper" id="villa" class="checkboxInput" value="Villa" />
                                    <label for="villa">
                                        <div class="checkboxLabel">
                                            <svg viewBox="0,0,50,50">
                                                <path d="M5 30 L 20 45 L 45 5"></path>
                                            </svg>
                                        </div>
                                        <span>Villa</span>
                                    </label>
                                </div>
                                <div class="singleCheckbox">
                                    <input type="checkbox" name="ejendomstyper" id="lystejendom" class="checkboxInput" value="Lystejendom" />
                                    <label for="lystejendom">
                                        <div class="checkboxLabel">
                                            <svg viewBox="0,0,50,50">
                                                <path d="M5 30 L 20 45 L 45 5"></path>
                                            </svg>
                                        </div>
                                        <span>Lystejendom</span>
                                    </label>
                                </div>
                                <div class="singleCheckbox">
                                    <input type="checkbox" name="ejendomstyper" id="fritidshus" class="checkboxInput" value="Sommerhus" />
                                    <label for="fritidshus">
                                        <div class="checkboxLabel">
                                            <svg viewBox="0,0,50,50">
                                                <path d="M5 30 L 20 45 L 45 5"></path>
                                            </svg>
                                        </div>
                                        <span>Sommerhus</span>
                                    </label>
                                </div>
                                <div class="singleCheckbox">
                                    <input type="checkbox" name="ejendomstyper" id="helarsgrund" class="checkboxInput" value="Helårsgrund" />
                                    <label for="helarsgrund">
                                        <div class="checkboxLabel">
                                            <svg viewBox="0,0,50,50">
                                                <path d="M5 30 L 20 45 L 45 5"></path>
                                            </svg>
                                        </div>
                                        <span>Helårsgrund</span>
                                    </label>
                                </div>
                                <!--<div class="singleCheckbox">
                                    <input type="checkbox" name="ejendomstyper" id="gods" class="checkboxInput" value="GODS" />
                                    <label for="gods">
                                        <div class="checkboxLabel">
                                            <svg viewBox="0,0,50,50">
                                                <path d="M5 30 L 20 45 L 45 5"></path>
                                            </svg>
                                        </div>
                                        <span>Gods</span>
                                    </label>
                                </div>-->
                                <div class="singleCheckbox">
                                    <input type="checkbox" name="ejendomstyper" id="villalejlighed" class="checkboxInput" value="Villalejlighed" />
                                    <label for="villalejlighed">
                                        <div class="checkboxLabel">
                                            <svg viewBox="0,0,50,50">
                                                <path d="M5 30 L 20 45 L 45 5"></path>
                                            </svg>
                                        </div>
                                        <span>Villalejlighed</span>
                                    </label>
                                </div>
                                <!--<div class="singleCheckbox">
                                    <input type="checkbox" name="ejendomstyper" id="landejendom" class="checkboxInput" value="Hesteejendom" />
                                    <label for="landejendom">
                                        <div class="checkboxLabel">
                                            <svg viewBox="0,0,50,50">
                                                <path d="M5 30 L 20 45 L 45 5"></path>
                                            </svg>
                                        </div>
                                        <span>Hesteejendom</span>
                                    </label>
                                </div>-->
                                <div class="singleCheckbox">
                                    <input type="checkbox" name="ejendomstyper" id="ejerlejlighed" class="checkboxInput" value="Ejerlejlighed" />
                                    <label for="ejerlejlighed">
                                        <div class="checkboxLabel">
                                            <svg viewBox="0,0,50,50">
                                                <path d="M5 30 L 20 45 L 45 5"></path>
                                            </svg>
                                        </div>
                                        <span>Ejerlejlighed</span>
                                    </label>
                                </div>
                            </div>
                            <div class="singleCheckbox">
                                <input type="checkbox" name="ejendomstyper" id="andet" class="checkboxInput" value="Andet" />
                                <label for="andet">
                                    <div class="checkboxLabel">
                                        <svg viewBox="0,0,50,50">
                                            <path d="M5 30 L 20 45 L 45 5"></path>
                                        </svg>
                                    </div>
                                    <span>Andet</span>
                                </label>
                            </div>
                        </div>

                        <h4>Yderligere oplysninger:</h4>
                        <div class="singleField">
                            <label for="navn">Navn*</label>
                            <input type="text" id="navn" name="navn" required autocomplete="none">
                        </div>
                        <div class="singleField singleField--autocomplete singleField--autocompleteFull singleField--singleComplete" data-action="adresser">
                            <label for="address">Adresse*</label>
                            <div class="autocompleteFields">
                                <input type="text" class="realValue" id="address" name="address" autocomplete="none">
                                <div class="currentValueEntered"></div>
                                <input type="text" class="valueAutocomplete" id="address-autocomplete" autocomplete="none">
                                <input type="hidden" id="addressID" name="addressID" autocomplete="none" tabindex="-1">
                                <ul class="autocompleteList"></ul>
                            </div>
                        </div>
                        <!-- 						<div class="singleField singleField--autocomplete singleField--half singleFieldBy" data-action="postnumre">
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
                        <?php if(get_field( 'text_after_form' )): ?>
                            <div class="kobertFormText">
                                <?php the_field( 'text_after_form' ); ?>
                            </div>
                        <?php endif; ?>
                        <div class="buttonCenter">
                            <button class="button button--brown button--arrow" type="submit"><span>Opret</span></button>
                            <div class="successText">Tak, du er hermed oprettet i vores køberkartotek. Vi har sendt dig en mail med bekræftelse herpå.</div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

<?php if(get_field( 'button_text' )): ?>
    <?php get_template_part('template-parts/parts/vurdering', 'template'); ?>
<?php endif; ?>