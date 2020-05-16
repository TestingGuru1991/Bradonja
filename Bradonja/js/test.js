// JavaScript Document
confirm("Da li si spreman da proveriš koliko si naučio?");
confirm("Pravila: 1. Pitanja su iz lekcija, vezanih za html, dostupnih na sajtu html akademija Bradonja. 2. Na pitanja je potrebno odgovarati sa 'da' ili 'ne'! 3. Biće ti postavljeno 10 pitanja! 4. Svaki tačan odgovor je uslov za novo pitanje. Ako pogrešiš test se prekida.");
var prvo = prompt("1. Da li HTTP protokol služi za komunikaciju između web čitača i servera?");

if (prvo === "da") {
	document.write("To je tačan odgovor! HTTP je protokol za komunikaciju između web čitača i servera.");
	document.write("<br/>");
	alert("To je tačan odgovor! HTTP je protokol za komunikaciju između web čitača i servera.");
		var drugo = prompt("2. HTML je skraćenica od Hyper Text Mistake Language?");
		if (drugo === "da") {
			document.write("Žao nam je! HTTP je skraćenica od Hyper Text Makup Language!");
			document.write("<br/>");
			alert("Žao nam je! HTTP je skraćenica od Hyper Text Makup Language!");
			alert("TEST JE ZA TEBE GOTOV! OBNOVI GRADIVO I POKUŠAJ OPET!");
			document.write("TEST JE ZA TEBE GOTOV! OBNOVI GRADIVO I POKUŠAJ OPET!");
		} else {
			document.write("HTTP je skraćenica od Hyper Text Makup Language! BRAVO!");
			document.write("<br/>");
			alert("HTTP je skraćenica od Hyper Text Makup Language! BRAVO!");
				var trece = prompt("3. HTML tagovi su osetljivi na velika i mala slova?");
				if (trece === "da") {
					document.write("Žao nam je! HTML tagovi nisu osetljivi na velika i mala slova!");
					document.write("<br/>");
					alert("Žao nam je! HTML tagovi nisu osetljivi na velika i mala slova!");
					alert("TEST JE ZA TEBE GOTOV! OBNOVI GRADIVO I POKUŠAJ OPET!");
					document.write("TEST JE ZA TEBE GOTOV! OBNOVI GRADIVO I POKUŠAJ OPET!");
				} else {
					document.write("HTML tagovi nisu osetljivi na velika i mala slova! BRAVO!");
					document.write("<br/>");
					alert("HTML tagovi nisu osetljivi na velika i mala slova!");
						var cetvrto = prompt("4. Atributi obezbeđuju dodatne informacije za tagove?");
						if (cetvrto === "da") {
							document.write("Atributi obezbeđuju dodatne informacije za tagove! BRAVO!");
							document.write("<br/>");
							alert("Atributi obezbeđuju dodatne informacije za tagove! BRAVO!");
								var peto = prompt("5. Za definisanje ispisa smera teksta se koristi: <bdo dir='&lt' ?");
								if (peto === "ne") {
									document.write("Ne koristi se, već se koristi &lt;bdo dir='rtl'&gt; BRAVO!");
									document.write("<br/>");
									alert("Ne koristi se, već se koristi <bdo dir='rtl'> BRAVO!");
										var sesto = prompt("6. Ako napišemo 5 razmaka u html kodu, onda će i u web čitaču biti prikazano 5 razmaka?");
										if (sesto === "da") {
											document.write("Žao nam je! Biće prikazan 1 razmak!");
											document.write("<br/>");
											alert("Žao nam je! Biće prikazan 1 razmak!");
											alert("TEST JE ZA TEBE GOTOV! OBNOVI GRADIVO I POKUŠAJ OPET!");
											document.write("TEST JE ZA TEBE GOTOV! OBNOVI GRADIVO I POKUŠAJ OPET!");
										} else {
											document.write("Biće prikazan 1 razmak! BRAVO! Ti si stvarno marljiv đak!");
											document.write("<br/>");
											alert("Biće prikazan 1 razmak! BRAVO! Ti si stvarno marljiv đak!");
												var sedmo = prompt("7. Meta tagovi definišu dodatne informacije koje se prikazuju u web čitaču svim korisnicima?");
												if (sedmo === "da") {
													document.write("Žao nam je! Meta tagovi definišu dodatne informacije koje se ne prikazuju!");
													document.write("<br/>");
													alert("Žao nam je! Meta tagovi definišu dodatne informacije koje se ne prikazuju!");
													alert("TEST JE ZA TEBE GOTOV! OBNOVI GRADIVO I POKUŠAJ OPET!");
													document.write("TEST JE ZA TEBE GOTOV! OBNOVI GRADIVO I POKUŠAJ OPET!");
												} else {
													document.write("BRAVO! Još jedan tačan odgovor u nizu! Na putu si da postaneš odličan web dizajner!");
													document.write("<br/>");
													alert("BRAVO! Još jedan tačan odgovor u nizu! Na putu si da postaneš odličan web dizajner!");
														var osmo = prompt("8. Hiperlink se koristi samo za prelaz na drugi dokument?");
														if (osmo === "da") {
															document.write("Žao nam je! Hiperlink se koristi za prelaz na drugi dokument ali i na deo tog istog dokumenta!");
															document.write("<br/>");
															alert("Žao nam je! Hiperlink se koristi za prelaz na drugi dokument ali i na deo tog istog dokumenta!");
															alert("TEST JE ZA TEBE GOTOV! OBNOVI GRADIVO I POKUŠAJ OPET!");
															document.write("TEST JE ZA TEBE GOTOV! OBNOVI GRADIVO I POKUŠAJ OPET!");	
														} else {
															document.write("Hiperlink se koristi za prelaz na drugi dokument ali i na deo tog istog dokumenta! BRAVO! Još samo dva pitanja do kraja!");
															document.write("<br/>");
															alert("Hiperlink se koristi za prelaz na drugi dokument ali i na deo tog istog dokumenta! BRAVO! Još samo dva pitanja do kraja!");
																var deveto = prompt("9. Link može da ukazuje na deo stranice! Deo stranice se imenuje <a> tagom, ali uz upotrebu name atributa?");
																if (deveto === "da") {
																	document.write("Link može da ukazuje na deo stranice! Deo stranice se imenuje <a> tagom, ali uz upotrebu name atributa! BRAVO!!! Još samo jedno pitanje!");
																	document.write("<br/>");
																	alert("Link može da ukazuje na deo stranice! Deo stranice se imenuje <a> tagom, ali uz upotrebu name atributa! BRAVO!!! Još samo jedno pitanje!");
																		var deseto = prompt("Postoji tri vrste lista: 1.nabrojive, 2.neuređene, 3.definicione?");
																		if (deseto === "da") {
																			document.write("BRAVO! BRAVO! BRAVO! BRADONJA je uspeo da od tebe napravi web dizajnera! Svetla budućnost je pred tobom! Iskoristi svoje znanje i učini neki segment života lakši ljudima koji ovo znanje nemaju! Kao nagradu dobijaš 5% popusta na kupovinu knjige: HTML Basic - Uz Bradonju je lakše!!!");
																			document.write("<br/>");
																			alert("BRAVO! BRAVO! BRAVO! BRADONJA je uspeo da od tebe napravi web dizajnera! Svetla budućnost je pred tobom! Iskoristi svoje znanje i učini neki segment života lakši ljudima koji ovo znanje nemaju! Kao nagradu dobijaš 5% popusta na kupovinu knjige: HTML Basic - Uz Bradonju je lakše!!!");
																			alert("BRADONJA TE POZDRAVLJA DO SLEDEĆEG DRUŽENJA!");
																		} else {
																			document.write("Tako blizu a tako daleko! Greška na samom kraju testa. Nemoj da kloneš duhom. Ponovi gradivo još jednom i pokušaj opet! BRADONJA je uz tebe! Jednog dana ćeš postati dobar web dizajner!");
																			document.write("<br/>");
																			alert("Tako blizu a tako daleko! Greška na samom kraju testa. Nemoj da kloneš duhom. Ponovi gradivo još jednom i pokušaj opet! BRADONJA je uz tebe! Jednog dana ćeš postati dobar web dizajner!");
																			alert("TEST JE ZA TEBE GOTOV! OBNOVI GRADIVO I POKUŠAJ OPET!");
																			document.write("TEST JE ZA TEBE GOTOV! OBNOVI GRADIVO I POKUŠAJ OPET!");
																		}
																} else {
																	document.write("Žao nam je! Link može da ukazuje na deo stranice! Deo stranice se imenuje <a> tagom, ali uz upotrebu name atributa!");
																	document.write("<br/>");
																	alert("Žao nam je! Link može da ukazuje na deo stranice! Deo stranice se imenuje <a> tagom, ali uz upotrebu name atributa!");
																	alert("TEST JE ZA TEBE GOTOV! OBNOVI GRADIVO I POKUŠAJ OPET!");
																	document.write("TEST JE ZA TEBE GOTOV! OBNOVI GRADIVO I POKUŠAJ OPET!");
																}
														}
												}
										}
								} else {
									document.write("Žao nam je! Ne koristi se, već se koristi <bdo dir='rtl'>");
									document.write("<br/>");
									alert("Žao nam je! Ne koristi se, već se koristi <bdo dir='rtl'>");
									alert("TEST JE ZA TEBE GOTOV! OBNOVI GRADIVO I POKUŠAJ OPET!");
									document.write("TEST JE ZA TEBE GOTOV! OBNOVI GRADIVO I POKUŠAJ OPET!");
								}
						} else {
							document.write("Žao nam je! Atributi zaista obezbeđuju dodatne informacije za tagove!");
							document.write("<br/>");
							alert("Žao nam je! Atributi zaista obezbeđuju dodatne informacije za tagove!");
							alert("TEST JE ZA TEBE GOTOV! OBNOVI GRADIVO I POKUŠAJ OPET!");
							document.write("TEST JE ZA TEBE GOTOV! OBNOVI GRADIVO I POKUŠAJ OPET!");
						}
				}
		}
		
} else {
	document.write("Žao nam je! Nisi tačno odgovorio! HTTP jeste protokol za komunikaciju između web čitača i servera.");
	document.write("<br/>");
	alert("Žao nam je! Nisi tačno odgovorio! HTTP jeste protokol za komunikaciju između web čitača i servera.");
	alert("TEST JE ZA TEBE GOTOV! OBNOVI GRADIVO I POKUŠAJ OPET!");
	document.write("TEST JE ZA TEBE GOTOV! OBNOVI GRADIVO I POKUŠAJ OPET!");
}