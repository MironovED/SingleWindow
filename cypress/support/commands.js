import sel from "../fixtures/selectors.json";
import data from "../fixtures/data.json";
import selAcceptPay from "../fixtures/acceptPayRequest/selectorsAcceptPayRequest.json";
import selApplicRegistr from "../fixtures/applicRegistrRequest/selectorsApplicRegistrRequest.json";
import selExportPayDoc from "../fixtures/exportPayDocRequest/selectorsExportPayDocRequest.json";

//залогиниться
Cypress.Commands.add("login", (email, password) => {
	cy.get(sel.login).type(email);
	cy.get(sel.password).type(password);
	cy.get(sel.buttonEnter).click();
	cy.contains(sel.singleWindow).should("be.visible");
});

//открыть раздел "Одно окно"
Cypress.Commands.add("clickSingleWindow", () => {
	cy.contains(sel.singleWindow).click({ force: true });
});

//открыть подраздел "Заявка на взаимодействие"
Cypress.Commands.add("clickApplicRegistrRequest", () => {
	cy.contains(selApplicRegistr.ApplicRegistrRequest).click({ force: true });
});

//открыть подраздел "Запрос информации, необходимой для перевода денежных средств"
Cypress.Commands.add("clickExportPayDocRequest", () => {
	cy.contains(selExportPayDoc.exportPayDocRequest).click({ force: true });
});

// открыть подраздел "Информирование о приеме к исполнению распоряжения"
Cypress.Commands.add("clickNotificationOfAcceptance", () => {
	cy.contains(selAcceptPay.acceptPayRequest).click({ force: true });
});

//нажать кнопку "сохранить"
Cypress.Commands.add("pressSave", () => {
	cy.contains(sel.buttonSave).click({ force: true });
});

//отправить запрос в СМЭВ
Cypress.Commands.add("sendRequest", () => {
	cy.get(".v-button-caption").contains("Новый").click({ force: true });
	cy.selectSection("Отправить");
});

//нажать кнопку "создать"
Cypress.Commands.add("pressButtonCreate", () => {
	cy.get(sel.buttonCreate).then(($elements) => {
		let array = $elements;
		cy.get(array[1]).click();
	});
});

//выбрать поле по названию для ввода данных (универсальная функция)
Cypress.Commands.add("selectField", (selector, data) => {
	cy.contains(selector)
		.parent()
		.then(($el) => {
			cy.get($el)
				.parent()
				.then(($elem) => {
					cy.get($elem).next().click().type(data);
				});
		});
});

//выбрать поле по названия. Альтернативный способ
Cypress.Commands.add("selectFieldAlternative", (selector, data) => {
	cy.contains(selector)
		.last()
		.parent()
		.then(($el) => {
			cy.get($el)
				.parent()
				.then(($elem) => {
					cy.get($elem).next().click().type(data);
				});
		});
});

//ввести в поле InvoiceID значение
Cypress.Commands.add("typeInvoiceID", (data) => {
	cy.get(".v-required-field-indicator")
		.last()
		.then((el) => {
			cy.get(el)
				.parent()
				.then((el) => {
					cy.get(el)
						.parent()
						.then((el) => {
							cy.get(el)
								.parent()
								.then((el) => {
									cy.get(el).next().click().type(data);
								});
						});
				});
		});
});

//выбрать из выпадающего списка нужное значение
Cypress.Commands.add("selectSection", (section) => {
	cy.contains(section).click({ force: true });
});

//добавить номер уникального участника в меню "настройки"
Cypress.Commands.add("addRegNumber", (value) => {
	cy.selectSection(data.settings);
	cy.selectSection(data.edit);
	cy.get(sel.fieldRegNumber).type(value);
	cy.pressSave();
	cy.selectSection(data.close);
});

//очистить уникальный номер участника в меню "настройки"
Cypress.Commands.add("clearRegNumber", () => {
	cy.selectSection(data.settings);
	cy.selectSection(data.edit);
	cy.get(sel.fieldRegNumber).clear();
	cy.pressSave();
	cy.selectSection(data.close);
});
