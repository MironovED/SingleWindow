// AAA - Arrange Act Assertion
const generate = require("../support/function");

import user from "../fixtures/user.json";
import sel from "../fixtures/selectors.json";
import selAcceptPay from "../fixtures/acceptPayRequest/selectorsAcceptPayRequest.json";
import dataAcceptPay from "../fixtures/acceptPayRequest/dataAcceptPayRequest.json";
import selApplicRegistr from "../fixtures/applicRegistrRequest/selectorsApplicRegistrRequest.json";
import dataApplicRegistr from "../fixtures/applicRegistrRequest/dataApplicRegistrRequest.json";
import dataExportPayDoc from "../fixtures/exportPayDocRequest/dataExportPayDocRequest.json";

// Заявка на взаимодействие
describe("ApplicRegistrRequest", () => {
	describe("request", () => {
		beforeEach(() => {
			cy.visit("/#");
			cy.login(user.loginSW, user.password);
			cy.clickSingleWindow();
		});

		it("valid request: new", () => {
			cy.clearRegNumber();

			cy.clickApplicRegistrRequest();
			cy.pressButtonCreate();

			cy.selectField(selApplicRegistr.urlDBO, dataApplicRegistr.urlDBO);
			cy.selectField(
				selApplicRegistr.routingCode1,
				dataApplicRegistr.routingCode1
			);
			cy.selectField(
				selApplicRegistr.routingCode2,
				dataApplicRegistr.routingCode2
			);
			cy.selectField(
				selApplicRegistr.routingCode3,
				dataApplicRegistr.routingCode3
			);
			cy.selectField(
				selApplicRegistr.reasonSend,
				dataApplicRegistr.reasonSendNew
			).selectSection(dataApplicRegistr.reasonSendNew);
			cy.pressSave();
			cy.sendRequest();

			cy.contains(
				"Редактирование [Заявка на взаимодействие]Заявка на взаимодействие(Отправлен)"
			).should("be.visible");
		});

		it("valid request update, when missing regNumber", () => {
			cy.clearRegNumber();

			cy.clickApplicRegistrRequest();
			cy.pressButtonCreate();

			cy.selectField(selApplicRegistr.urlDBO, dataApplicRegistr.urlDBO);
			cy.selectField(
				selApplicRegistr.routingCode1,
				dataApplicRegistr.routingCode1
			);
			cy.selectField(
				selApplicRegistr.routingCode2,
				dataApplicRegistr.routingCode2
			);
			cy.selectField(
				selApplicRegistr.routingCode3,
				dataApplicRegistr.routingCode3
			);
			cy.selectField(
				selApplicRegistr.reasonSend,
				dataApplicRegistr.reasonSendUpdate
			).selectSection(dataApplicRegistr.reasonSendUpdate);
			cy.pressSave();

			cy.contains(sel.error).should("be.visible");
		});

		it("valid request remove, when missing regNumber", () => {
			cy.clearRegNumber();
			cy.clickApplicRegistrRequest();
			cy.pressButtonCreate();

			cy.selectField(selApplicRegistr.urlDBO, dataApplicRegistr.urlDBO);
			cy.selectField(
				selApplicRegistr.routingCode1,
				dataApplicRegistr.routingCode1
			);
			cy.selectField(
				selApplicRegistr.routingCode2,
				dataApplicRegistr.routingCode2
			);
			cy.selectField(
				selApplicRegistr.routingCode3,
				dataApplicRegistr.routingCode3
			);
			cy.selectField(
				selApplicRegistr.reasonSend,
				dataApplicRegistr.reasonSendRemove
			).selectSection(dataApplicRegistr.reasonSendRemove);
			cy.pressSave();

			cy.contains(sel.error).should("be.visible");
		});

		it("valid request: update", () => {
			cy.addRegNumber(dataApplicRegistr.regNumber);
			cy.clickApplicRegistrRequest();
			cy.pressButtonCreate();

			cy.selectField(selApplicRegistr.urlDBO, dataApplicRegistr.urlDBO);
			cy.selectField(
				selApplicRegistr.routingCode1,
				dataApplicRegistr.routingCode1
			);
			cy.selectField(
				selApplicRegistr.routingCode2,
				dataApplicRegistr.routingCode2
			);
			cy.selectField(
				selApplicRegistr.routingCode3,
				dataApplicRegistr.routingCode3
			);
			cy.selectField(
				selApplicRegistr.reasonSend,
				dataApplicRegistr.reasonSendUpdate
			).selectSection(dataApplicRegistr.reasonSendUpdate);
			cy.pressSave();
			cy.sendRequest();

			cy.contains(
				"Редактирование [Заявка на взаимодействие]Заявка на взаимодействие(Отправлен)"
			).should("be.visible");
		});

		it("valid request: remove", () => {
			cy.addRegNumber(dataApplicRegistr.regNumber);
			cy.clickApplicRegistrRequest();
			cy.pressButtonCreate();

			cy.selectField(selApplicRegistr.urlDBO, dataApplicRegistr.urlDBO);
			cy.selectField(
				selApplicRegistr.routingCode1,
				dataApplicRegistr.routingCode1
			);
			cy.selectField(
				selApplicRegistr.routingCode2,
				dataApplicRegistr.routingCode2
			);
			cy.selectField(
				selApplicRegistr.routingCode3,
				dataApplicRegistr.routingCode3
			);
			cy.selectField(
				selApplicRegistr.reasonSend,
				dataApplicRegistr.reasonSendRemove
			).selectSection(dataApplicRegistr.reasonSendRemove);
			cy.pressSave();
			cy.sendRequest();

			cy.contains(
				"Редактирование [Заявка на взаимодействие]Заявка на взаимодействие(Отправлен)"
			).should("be.visible");
		});
	});

	describe("fields test", () => {
		beforeEach(() => {
			cy.visit("/#");
			cy.login(user.loginSW, user.password);
			cy.clickSingleWindow();
		});

		it("all fields empty", () => {
			cy.clickApplicRegistrRequest();
			cy.pressButtonCreate();
			cy.pressSave();

			cy.contains(sel.error).should("be.visible");
		});

		it("empty urlDBO", () => {
			cy.clickApplicRegistrRequest();
			cy.pressButtonCreate();

			cy.selectField(
				selApplicRegistr.routingCode1,
				dataApplicRegistr.routingCode1
			);
			cy.selectField(
				selApplicRegistr.routingCode2,
				dataApplicRegistr.routingCode2
			);
			cy.selectField(
				selApplicRegistr.routingCode3,
				dataApplicRegistr.routingCode3
			);
			cy.selectField(
				selApplicRegistr.reasonSend,
				dataApplicRegistr.reasonSendNew
			).selectSection(dataApplicRegistr.reasonSendNew);
			cy.pressSave();

			cy.contains(sel.error).should("be.visible");
		});

		it("empty routingCode1", () => {
			cy.clickApplicRegistrRequest();
			cy.pressButtonCreate();

			cy.selectField(selApplicRegistr.urlDBO, dataApplicRegistr.urlDBO);
			cy.selectField(
				selApplicRegistr.routingCode2,
				dataApplicRegistr.routingCode2
			);
			cy.selectField(
				selApplicRegistr.routingCode3,
				dataApplicRegistr.routingCode3
			);
			cy.selectField(
				selApplicRegistr.reasonSend,
				dataApplicRegistr.reasonSendNew
			).selectSection(dataApplicRegistr.reasonSendNew);
			cy.pressSave();

			cy.contains(sel.error).should("be.visible");
		});

		it("empty routingCode2", () => {
			cy.clickApplicRegistrRequest();
			cy.pressButtonCreate();

			cy.selectField(selApplicRegistr.urlDBO, dataApplicRegistr.urlDBO);
			cy.selectField(
				selApplicRegistr.routingCode1,
				dataApplicRegistr.routingCode1
			);
			cy.selectField(
				selApplicRegistr.routingCode3,
				dataApplicRegistr.routingCode3
			);
			cy.selectField(
				selApplicRegistr.reasonSend,
				dataApplicRegistr.reasonSendNew
			).selectSection(dataApplicRegistr.reasonSendNew);
			cy.pressSave();

			cy.contains(sel.error).should("be.visible");
		});

		it("empty routingCode3", () => {
			cy.clickApplicRegistrRequest();
			cy.pressButtonCreate();
			cy.selectField(selApplicRegistr.urlDBO, dataApplicRegistr.urlDBO);
			cy.selectField(
				selApplicRegistr.routingCode1,
				dataApplicRegistr.routingCode1
			);
			cy.selectField(
				selApplicRegistr.routingCode2,
				dataApplicRegistr.routingCode2
			);
			cy.selectField(
				selApplicRegistr.reasonSend,
				dataApplicRegistr.reasonSendNew
			).selectSection(dataApplicRegistr.reasonSendNew);
			cy.pressSave();

			cy.contains(sel.error).should("be.visible");
		});

		it("empty reasonSend", () => {
			cy.clickApplicRegistrRequest();
			cy.pressButtonCreate();

			cy.selectField(selApplicRegistr.urlDBO, dataApplicRegistr.urlDBO);
			cy.selectField(
				selApplicRegistr.routingCode1,
				dataApplicRegistr.routingCode1
			);
			cy.selectField(
				selApplicRegistr.routingCode2,
				dataApplicRegistr.routingCode2
			);
			cy.selectField(
				selApplicRegistr.routingCode3,
				dataApplicRegistr.routingCode3
			);
			cy.pressSave();

			cy.contains(sel.error).should("be.visible");
		});

		it("limit values on fields", () => {
			cy.clickApplicRegistrRequest();
			cy.pressButtonCreate();

			cy.selectField(selApplicRegistr.urlDBO, generate.makeid(2000));
			cy.selectField(selApplicRegistr.routingCode1, generate.makeid(200));
			cy.selectField(selApplicRegistr.routingCode2, generate.makeid(200));
			cy.selectField(selApplicRegistr.routingCode3, generate.makeid(200));
			cy.selectField(
				selApplicRegistr.reasonSend,
				dataApplicRegistr.reasonSendNew
			).selectSection(dataApplicRegistr.reasonSendNew);
			cy.pressSave();

			cy.contains(
				"Редактирование [Заявка на взаимодействие]Заявка на взаимодействие(Новый)"
			).should("be.visible");
		});
	});
});

//Запрос информации, необходимой для перевода денежных средств
describe("ExportPayDocRequest", () => {
	describe("request", () => {
		beforeEach(() => {
			cy.visit("/#");
			cy.login(user.loginSW, user.password);
			cy.clickSingleWindow();
		});

		it("valid request", () => {
			cy.clickExportPayDocRequest();
			cy.pressButtonCreate();
			cy.typeInvoiceID(dataExportPayDoc.invoiceID);
			cy.pressSave();
			cy.sendRequest();

			cy.contains(
				"Редактирование [Запрос информации, необходимой для перевода денежных средств]Запрос информации, необходимой для перевода денежных средств(Отправлен)"
			).should("be.visible");
		});
	});

	describe("fields test", () => {
		beforeEach(() => {
			cy.visit("/#");
			cy.login(user.loginSW, user.password);
			cy.clickSingleWindow();
		});

		it("empty all field", () => {
			cy.clickExportPayDocRequest();
			cy.pressButtonCreate();
			cy.pressSave();

			cy.contains(sel.error).should("be.visible");
		});

		it("check invoiceID: 23 digit value", () => {
			cy.clickExportPayDocRequest();
			cy.pressButtonCreate();

			cy.typeInvoiceID("60077274285462022-000000");

			cy.pressSave();

			cy.contains(sel.error).should("be.visible");
		});

		it("check invoiceID: 6007727428546202200000001", () => {
			cy.clickExportPayDocRequest();
			cy.pressButtonCreate();

			cy.typeInvoiceID("6007727428546202200000001");

			cy.pressSave();

			cy.contains(sel.error).should("be.visible");
		});
	});
});

//Информирование о приеме к исполнению распоряжения
describe("AcceptPayRequest: new", () => {
	beforeEach(() => {
		cy.visit("/#");
		cy.login(user.loginSW, user.password);
		cy.clickSingleWindow();
	});

	it("valid request new", () => {
		cy.addRegNumber(dataAcceptPay.regNumber);

		cy.clickNotificationOfAcceptance();
		cy.pressButtonCreate();

		cy.selectField(selAcceptPay.amount, dataAcceptPay.amount);
		cy.selectField(selAcceptPay.currencyCode, dataAcceptPay.currencyCode);
		cy.selectField(selAcceptPay.purpose, dataAcceptPay.purpose);

		cy.selectFieldAlternative(
			selAcceptPay.operationID,
			dataAcceptPay.operationID
		);
		cy.selectFieldAlternative(
			selAcceptPay.invoiceID,
			dataAcceptPay.invoiceID
		);
		cy.selectField(
			selAcceptPay.reasonSend,
			dataAcceptPay.reasonSendNew
		).selectSection(dataAcceptPay.reasonSendNew);
		cy.selectField(selAcceptPay.date, dataAcceptPay.date);
		cy.selectField(selAcceptPay.payeeName, dataAcceptPay.payeeName);
		cy.selectField(selAcceptPay.payeeInn, dataAcceptPay.payeeInn);
		cy.selectField(
			selAcceptPay.payeePersonalAcc,
			dataAcceptPay.payeePersonalAcc
		);
		cy.selectField(selAcceptPay.payeeBik, dataAcceptPay.payeeBik);
		cy.selectField(selAcceptPay.payerName, dataAcceptPay.payerName);
		cy.selectField(selAcceptPay.payerInn, dataAcceptPay.payerInn);
		cy.selectField(
			selAcceptPay.payerPersonalAcc,
			dataAcceptPay.payerPersonalAcc
		);
		cy.selectField(selAcceptPay.payerBik, dataAcceptPay.payerBik);

		cy.pressSave();
		cy.sendRequest();

		cy.contains(
			"Редактирование [Информирование о приеме к исполнению распоряжения]Информирование о приеме к исполнению распоряжения(Отправлен)"
		).should("be.visible");
	});

	it("valid request recall", () => {
		cy.addRegNumber(dataAcceptPay.regNumber);

		cy.clickNotificationOfAcceptance();
		cy.pressButtonCreate();

		cy.selectField(selAcceptPay.amount, dataAcceptPay.amount);
		cy.selectField(selAcceptPay.currencyCode, dataAcceptPay.currencyCode);
		cy.selectField(selAcceptPay.purpose, dataAcceptPay.purpose);

		cy.selectFieldAlternative(
			selAcceptPay.operationID,
			dataAcceptPay.operationID
		);
		cy.selectFieldAlternative(
			selAcceptPay.invoiceID,
			dataAcceptPay.invoiceID
		);
		cy.selectField(
			selAcceptPay.reasonSend,
			dataAcceptPay.reasonSendRecall
		).selectSection(dataAcceptPay.reasonSendRecall);
		cy.selectField(selAcceptPay.date, dataAcceptPay.date);
		cy.selectField(selAcceptPay.payeeName, dataAcceptPay.payeeName);
		cy.selectField(selAcceptPay.payeeInn, dataAcceptPay.payeeInn);
		cy.selectField(
			selAcceptPay.payeePersonalAcc,
			dataAcceptPay.payeePersonalAcc
		);
		cy.selectField(selAcceptPay.payeeBik, dataAcceptPay.payeeBik);
		cy.selectField(selAcceptPay.payerName, dataAcceptPay.payerName);
		cy.selectField(selAcceptPay.payerInn, dataAcceptPay.payerInn);
		cy.selectField(
			selAcceptPay.payerPersonalAcc,
			dataAcceptPay.payerPersonalAcc
		);
		cy.selectField(selAcceptPay.payerBik, dataAcceptPay.payerBik);

		cy.pressSave();
		cy.sendRequest();

		cy.contains(
			"Редактирование [Информирование о приеме к исполнению распоряжения]Информирование о приеме к исполнению распоряжения(Отправлен)"
		).should("be.visible");
	});

	it("valid request clarify", () => {
		cy.addRegNumber(dataAcceptPay.regNumber);

		cy.clickNotificationOfAcceptance();
		cy.pressButtonCreate();

		cy.selectField(selAcceptPay.amount, dataAcceptPay.amount);
		cy.selectField(selAcceptPay.currencyCode, dataAcceptPay.currencyCode);
		cy.selectField(selAcceptPay.purpose, dataAcceptPay.purpose);

		cy.selectFieldAlternative(
			selAcceptPay.operationID,
			dataAcceptPay.operationID
		);
		cy.selectFieldAlternative(
			selAcceptPay.invoiceID,
			dataAcceptPay.invoiceID
		);
		cy.selectField(
			selAcceptPay.reasonSend,
			dataAcceptPay.reasonSendClarify
		).selectSection(dataAcceptPay.reasonSendClarify);
		cy.selectField(selAcceptPay.date, dataAcceptPay.date);
		cy.selectField(selAcceptPay.payeeName, dataAcceptPay.payeeName);
		cy.selectField(selAcceptPay.payeeInn, dataAcceptPay.payeeInn);
		cy.selectField(
			selAcceptPay.payeePersonalAcc,
			dataAcceptPay.payeePersonalAcc
		);
		cy.selectField(selAcceptPay.payeeBik, dataAcceptPay.payeeBik);
		cy.selectField(selAcceptPay.payerName, dataAcceptPay.payerName);
		cy.selectField(selAcceptPay.payerInn, dataAcceptPay.payerInn);
		cy.selectField(
			selAcceptPay.payerPersonalAcc,
			dataAcceptPay.payerPersonalAcc
		);
		cy.selectField(selAcceptPay.payerBik, dataAcceptPay.payerBik);

		cy.pressSave();
		cy.sendRequest();

		cy.contains(
			"Редактирование [Информирование о приеме к исполнению распоряжения]Информирование о приеме к исполнению распоряжения(Отправлен)"
		).should("be.visible");
	});

	//после доработки добавить асерт
	it("valid request new, when regNumber missing", () => {
		cy.clearRegNumber();

		cy.clickNotificationOfAcceptance();
		cy.pressButtonCreate();

		cy.selectField(selAcceptPay.amount, dataAcceptPay.amount);
		cy.selectField(selAcceptPay.currencyCode, dataAcceptPay.currencyCode);
		cy.selectField(selAcceptPay.purpose, dataAcceptPay.purpose);

		cy.selectFieldAlternative(
			selAcceptPay.operationID,
			dataAcceptPay.operationID
		);
		cy.selectFieldAlternative(
			selAcceptPay.invoiceID,
			dataAcceptPay.invoiceID
		);
		cy.selectField(
			selAcceptPay.reasonSend,
			dataAcceptPay.reasonSendNew
		).selectSection(dataAcceptPay.reasonSendNew);
		cy.selectField(selAcceptPay.date, dataAcceptPay.date);
		cy.selectField(selAcceptPay.payeeName, dataAcceptPay.payeeName);
		cy.selectField(selAcceptPay.payeeInn, dataAcceptPay.payeeInn);
		cy.selectField(
			selAcceptPay.payeePersonalAcc,
			dataAcceptPay.payeePersonalAcc
		);
		cy.selectField(selAcceptPay.payeeBik, dataAcceptPay.payeeBik);
		cy.selectField(selAcceptPay.payerName, dataAcceptPay.payerName);
		cy.selectField(selAcceptPay.payerInn, dataAcceptPay.payerInn);
		cy.selectField(
			selAcceptPay.payerPersonalAcc,
			dataAcceptPay.payerPersonalAcc
		);
		cy.selectField(selAcceptPay.payerBik, dataAcceptPay.payerBik);

		cy.pressSave();
		cy.sendRequest();

		// ????? assert
		//cy.contains(sel.error).should("be.visible");
	});
	//после доработки добавить асерт
	it("valid request recall, when regNumber missing", () => {
		cy.clearRegNumber();

		cy.clickNotificationOfAcceptance();
		cy.pressButtonCreate();

		cy.selectField(selAcceptPay.amount, dataAcceptPay.amount);
		cy.selectField(selAcceptPay.currencyCode, dataAcceptPay.currencyCode);
		cy.selectField(selAcceptPay.purpose, dataAcceptPay.purpose);

		cy.selectFieldAlternative(
			selAcceptPay.operationID,
			dataAcceptPay.operationID
		);
		cy.selectFieldAlternative(
			selAcceptPay.invoiceID,
			dataAcceptPay.invoiceID
		);
		cy.selectField(
			selAcceptPay.reasonSend,
			dataAcceptPay.reasonSendRecall
		).selectSection(dataAcceptPay.reasonSendRecall);
		cy.selectField(selAcceptPay.date, dataAcceptPay.date);
		cy.selectField(selAcceptPay.payeeName, dataAcceptPay.payeeName);
		cy.selectField(selAcceptPay.payeeInn, dataAcceptPay.payeeInn);
		cy.selectField(
			selAcceptPay.payeePersonalAcc,
			dataAcceptPay.payeePersonalAcc
		);
		cy.selectField(selAcceptPay.payeeBik, dataAcceptPay.payeeBik);
		cy.selectField(selAcceptPay.payerName, dataAcceptPay.payerName);
		cy.selectField(selAcceptPay.payerInn, dataAcceptPay.payerInn);
		cy.selectField(
			selAcceptPay.payerPersonalAcc,
			dataAcceptPay.payerPersonalAcc
		);
		cy.selectField(selAcceptPay.payerBik, dataAcceptPay.payerBik);

		cy.pressSave();
		cy.sendRequest();

		// ????? assert
		//cy.contains(sel.error).should("be.visible");
	});
	//после доработки добавить асерт
	it("valid request clarify, when regNumber missing", () => {
		cy.clearRegNumber();

		cy.clickNotificationOfAcceptance();
		cy.pressButtonCreate();

		cy.selectField(selAcceptPay.amount, dataAcceptPay.amount);
		cy.selectField(selAcceptPay.currencyCode, dataAcceptPay.currencyCode);
		cy.selectField(selAcceptPay.purpose, dataAcceptPay.purpose);

		cy.selectFieldAlternative(
			selAcceptPay.operationID,
			dataAcceptPay.operationID
		);
		cy.selectFieldAlternative(
			selAcceptPay.invoiceID,
			dataAcceptPay.invoiceID
		);
		cy.selectField(
			selAcceptPay.reasonSend,
			dataAcceptPay.reasonSendClarify
		).selectSection(dataAcceptPay.reasonSendClarify);
		cy.selectField(selAcceptPay.date, dataAcceptPay.date);
		cy.selectField(selAcceptPay.payeeName, dataAcceptPay.payeeName);
		cy.selectField(selAcceptPay.payeeInn, dataAcceptPay.payeeInn);
		cy.selectField(
			selAcceptPay.payeePersonalAcc,
			dataAcceptPay.payeePersonalAcc
		);
		cy.selectField(selAcceptPay.payeeBik, dataAcceptPay.payeeBik);
		cy.selectField(selAcceptPay.payerName, dataAcceptPay.payerName);
		cy.selectField(selAcceptPay.payerInn, dataAcceptPay.payerInn);
		cy.selectField(
			selAcceptPay.payerPersonalAcc,
			dataAcceptPay.payerPersonalAcc
		);
		cy.selectField(selAcceptPay.payerBik, dataAcceptPay.payerBik);

		cy.pressSave();
		cy.sendRequest();

		// ????? assert
		//cy.contains(sel.error).should("be.visible");
	});

	describe("control of required fields", () => {
		it("missing operationID", () => {
			cy.clickNotificationOfAcceptance();
			cy.pressButtonCreate();

			cy.selectField(selAcceptPay.amount, dataAcceptPay.amount);
			cy.selectField(
				selAcceptPay.currencyCode,
				dataAcceptPay.currencyCode
			);
			cy.selectField(selAcceptPay.purpose, dataAcceptPay.purpose);

			cy.selectFieldAlternative(
				selAcceptPay.invoiceID,
				dataAcceptPay.invoiceID
			);
			cy.selectField(
				selAcceptPay.reasonSend,
				dataAcceptPay.reasonSendNew
			).selectSection(dataAcceptPay.reasonSendNew);
			cy.selectField(selAcceptPay.date, dataAcceptPay.date);
			cy.selectField(selAcceptPay.payeeName, dataAcceptPay.payeeName);
			cy.selectField(selAcceptPay.payeeInn, dataAcceptPay.payeeInn);
			cy.selectField(
				selAcceptPay.payeePersonalAcc,
				dataAcceptPay.payeePersonalAcc
			);
			cy.selectField(selAcceptPay.payeeBik, dataAcceptPay.payeeBik);
			cy.selectField(selAcceptPay.payerName, dataAcceptPay.payerName);
			cy.selectField(selAcceptPay.payerInn, dataAcceptPay.payerInn);
			cy.selectField(
				selAcceptPay.payerPersonalAcc,
				dataAcceptPay.payerPersonalAcc
			);
			cy.selectField(selAcceptPay.payerBik, dataAcceptPay.payerBik);

			cy.pressSave();

			cy.contains(sel.error).should("be.visible");
		});

		it("missing invoiceID", () => {
			cy.clickNotificationOfAcceptance();
			cy.pressButtonCreate();

			cy.selectField(selAcceptPay.amount, dataAcceptPay.amount);
			cy.selectField(
				selAcceptPay.currencyCode,
				dataAcceptPay.currencyCode
			);
			cy.selectField(selAcceptPay.purpose, dataAcceptPay.purpose);

			cy.selectFieldAlternative(
				selAcceptPay.operationID,
				dataAcceptPay.operationID
			);

			cy.selectField(
				selAcceptPay.reasonSend,
				dataAcceptPay.reasonSendNew
			).selectSection(dataAcceptPay.reasonSendNew);
			cy.selectField(selAcceptPay.date, dataAcceptPay.date);
			cy.selectField(selAcceptPay.payeeName, dataAcceptPay.payeeName);
			cy.selectField(selAcceptPay.payeeInn, dataAcceptPay.payeeInn);
			cy.selectField(
				selAcceptPay.payeePersonalAcc,
				dataAcceptPay.payeePersonalAcc
			);
			cy.selectField(selAcceptPay.payeeBik, dataAcceptPay.payeeBik);
			cy.selectField(selAcceptPay.payerName, dataAcceptPay.payerName);
			cy.selectField(selAcceptPay.payerInn, dataAcceptPay.payerInn);
			cy.selectField(
				selAcceptPay.payerPersonalAcc,
				dataAcceptPay.payerPersonalAcc
			);
			cy.selectField(selAcceptPay.payerBik, dataAcceptPay.payerBik);

			cy.pressSave();

			cy.contains(sel.error).should("be.visible");
		});

		it("missing date", () => {
			cy.clickNotificationOfAcceptance();
			cy.pressButtonCreate();

			cy.selectField(selAcceptPay.amount, dataAcceptPay.amount);
			cy.selectField(
				selAcceptPay.currencyCode,
				dataAcceptPay.currencyCode
			);
			cy.selectField(selAcceptPay.purpose, dataAcceptPay.purpose);

			cy.selectFieldAlternative(
				selAcceptPay.operationID,
				dataAcceptPay.operationID
			);
			cy.selectFieldAlternative(
				selAcceptPay.invoiceID,
				dataAcceptPay.invoiceID
			);
			cy.selectField(
				selAcceptPay.reasonSend,
				dataAcceptPay.reasonSendNew
			).selectSection(dataAcceptPay.reasonSendNew);
			cy.selectField(selAcceptPay.payeeName, dataAcceptPay.payeeName);
			cy.selectField(selAcceptPay.payeeInn, dataAcceptPay.payeeInn);
			cy.selectField(
				selAcceptPay.payeePersonalAcc,
				dataAcceptPay.payeePersonalAcc
			);
			cy.selectField(selAcceptPay.payeeBik, dataAcceptPay.payeeBik);
			cy.selectField(selAcceptPay.payerName, dataAcceptPay.payerName);
			cy.selectField(selAcceptPay.payerInn, dataAcceptPay.payerInn);
			cy.selectField(
				selAcceptPay.payerPersonalAcc,
				dataAcceptPay.payerPersonalAcc
			);
			cy.selectField(selAcceptPay.payerBik, dataAcceptPay.payerBik);

			cy.pressSave();

			cy.contains(sel.error).should("be.visible");
		});

		it("missing amount", () => {
			cy.clickNotificationOfAcceptance();
			cy.pressButtonCreate();

			cy.selectField(
				selAcceptPay.currencyCode,
				dataAcceptPay.currencyCode
			);
			cy.selectField(selAcceptPay.purpose, dataAcceptPay.purpose);

			cy.selectFieldAlternative(
				selAcceptPay.operationID,
				dataAcceptPay.operationID
			);
			cy.selectFieldAlternative(
				selAcceptPay.invoiceID,
				dataAcceptPay.invoiceID
			);
			cy.selectField(
				selAcceptPay.reasonSend,
				dataAcceptPay.reasonSendNew
			).selectSection(dataAcceptPay.reasonSendNew);
			cy.selectField(selAcceptPay.date, dataAcceptPay.date);
			cy.selectField(selAcceptPay.payeeName, dataAcceptPay.payeeName);
			cy.selectField(selAcceptPay.payeeInn, dataAcceptPay.payeeInn);
			cy.selectField(
				selAcceptPay.payeePersonalAcc,
				dataAcceptPay.payeePersonalAcc
			);
			cy.selectField(selAcceptPay.payeeBik, dataAcceptPay.payeeBik);
			cy.selectField(selAcceptPay.payerName, dataAcceptPay.payerName);
			cy.selectField(selAcceptPay.payerInn, dataAcceptPay.payerInn);
			cy.selectField(
				selAcceptPay.payerPersonalAcc,
				dataAcceptPay.payerPersonalAcc
			);
			cy.selectField(selAcceptPay.payerBik, dataAcceptPay.payerBik);

			cy.pressSave();

			cy.contains(sel.error).should("be.visible");
		});

		it("missing currencyCode", () => {
			cy.clickNotificationOfAcceptance();
			cy.pressButtonCreate();

			cy.selectField(selAcceptPay.amount, dataAcceptPay.amount);

			cy.selectField(selAcceptPay.purpose, dataAcceptPay.purpose);

			cy.selectFieldAlternative(
				selAcceptPay.operationID,
				dataAcceptPay.operationID
			);
			cy.selectFieldAlternative(
				selAcceptPay.invoiceID,
				dataAcceptPay.invoiceID
			);
			cy.selectField(
				selAcceptPay.reasonSend,
				dataAcceptPay.reasonSendNew
			).selectSection(dataAcceptPay.reasonSendNew);
			cy.selectField(selAcceptPay.date, dataAcceptPay.date);
			cy.selectField(selAcceptPay.payeeName, dataAcceptPay.payeeName);
			cy.selectField(selAcceptPay.payeeInn, dataAcceptPay.payeeInn);
			cy.selectField(
				selAcceptPay.payeePersonalAcc,
				dataAcceptPay.payeePersonalAcc
			);
			cy.selectField(selAcceptPay.payeeBik, dataAcceptPay.payeeBik);
			cy.selectField(selAcceptPay.payerName, dataAcceptPay.payerName);
			cy.selectField(selAcceptPay.payerInn, dataAcceptPay.payerInn);
			cy.selectField(
				selAcceptPay.payerPersonalAcc,
				dataAcceptPay.payerPersonalAcc
			);
			cy.selectField(selAcceptPay.payerBik, dataAcceptPay.payerBik);

			cy.pressSave();

			cy.contains(sel.error).should("be.visible");
		});

		it("missing purpose", () => {
			cy.clickNotificationOfAcceptance();
			cy.pressButtonCreate();

			cy.selectField(selAcceptPay.amount, dataAcceptPay.amount);
			cy.selectField(
				selAcceptPay.currencyCode,
				dataAcceptPay.currencyCode
			);

			cy.selectFieldAlternative(
				selAcceptPay.operationID,
				dataAcceptPay.operationID
			);
			cy.selectFieldAlternative(
				selAcceptPay.invoiceID,
				dataAcceptPay.invoiceID
			);
			cy.selectField(
				selAcceptPay.reasonSend,
				dataAcceptPay.reasonSendNew
			).selectSection(dataAcceptPay.reasonSendNew);
			cy.selectField(selAcceptPay.date, dataAcceptPay.date);
			cy.selectField(selAcceptPay.payeeName, dataAcceptPay.payeeName);
			cy.selectField(selAcceptPay.payeeInn, dataAcceptPay.payeeInn);
			cy.selectField(
				selAcceptPay.payeePersonalAcc,
				dataAcceptPay.payeePersonalAcc
			);
			cy.selectField(selAcceptPay.payeeBik, dataAcceptPay.payeeBik);
			cy.selectField(selAcceptPay.payerName, dataAcceptPay.payerName);
			cy.selectField(selAcceptPay.payerInn, dataAcceptPay.payerInn);
			cy.selectField(
				selAcceptPay.payerPersonalAcc,
				dataAcceptPay.payerPersonalAcc
			);
			cy.selectField(selAcceptPay.payerBik, dataAcceptPay.payerBik);

			cy.pressSave();

			cy.contains(sel.error).should("be.visible");
		});

		it("missing reasonSend", () => {
			cy.clickNotificationOfAcceptance();
			cy.pressButtonCreate();

			cy.selectField(selAcceptPay.amount, dataAcceptPay.amount);
			cy.selectField(
				selAcceptPay.currencyCode,
				dataAcceptPay.currencyCode
			);
			cy.selectField(selAcceptPay.purpose, dataAcceptPay.purpose);

			cy.selectFieldAlternative(
				selAcceptPay.operationID,
				dataAcceptPay.operationID
			);
			cy.selectFieldAlternative(
				selAcceptPay.invoiceID,
				dataAcceptPay.invoiceID
			);

			cy.selectField(selAcceptPay.date, dataAcceptPay.date);
			cy.selectField(selAcceptPay.payeeName, dataAcceptPay.payeeName);
			cy.selectField(selAcceptPay.payeeInn, dataAcceptPay.payeeInn);
			cy.selectField(
				selAcceptPay.payeePersonalAcc,
				dataAcceptPay.payeePersonalAcc
			);
			cy.selectField(selAcceptPay.payeeBik, dataAcceptPay.payeeBik);
			cy.selectField(selAcceptPay.payerName, dataAcceptPay.payerName);
			cy.selectField(selAcceptPay.payerInn, dataAcceptPay.payerInn);
			cy.selectField(
				selAcceptPay.payerPersonalAcc,
				dataAcceptPay.payerPersonalAcc
			);
			cy.selectField(selAcceptPay.payerBik, dataAcceptPay.payerBik);

			cy.pressSave();

			cy.contains(sel.error).should("be.visible");
		});

		it("missing payeeName", () => {
			cy.clickNotificationOfAcceptance();
			cy.pressButtonCreate();

			cy.selectField(selAcceptPay.amount, dataAcceptPay.amount);
			cy.selectField(
				selAcceptPay.currencyCode,
				dataAcceptPay.currencyCode
			);
			cy.selectField(selAcceptPay.purpose, dataAcceptPay.purpose);

			cy.selectFieldAlternative(
				selAcceptPay.operationID,
				dataAcceptPay.operationID
			);
			cy.selectFieldAlternative(
				selAcceptPay.invoiceID,
				dataAcceptPay.invoiceID
			);
			cy.selectField(
				selAcceptPay.reasonSend,
				dataAcceptPay.reasonSendNew
			).selectSection(dataAcceptPay.reasonSendNew);
			cy.selectField(selAcceptPay.date, dataAcceptPay.date);
			cy.selectField(selAcceptPay.payeeInn, dataAcceptPay.payeeInn);
			cy.selectField(
				selAcceptPay.payeePersonalAcc,
				dataAcceptPay.payeePersonalAcc
			);
			cy.selectField(selAcceptPay.payeeBik, dataAcceptPay.payeeBik);
			cy.selectField(selAcceptPay.payerName, dataAcceptPay.payerName);
			cy.selectField(selAcceptPay.payerInn, dataAcceptPay.payerInn);
			cy.selectField(
				selAcceptPay.payerPersonalAcc,
				dataAcceptPay.payerPersonalAcc
			);
			cy.selectField(selAcceptPay.payerBik, dataAcceptPay.payerBik);

			cy.pressSave();

			cy.contains(sel.error).should("be.visible");
		});

		it("missing payeeInn", () => {
			cy.clickNotificationOfAcceptance();
			cy.pressButtonCreate();

			cy.selectField(selAcceptPay.amount, dataAcceptPay.amount);
			cy.selectField(
				selAcceptPay.currencyCode,
				dataAcceptPay.currencyCode
			);
			cy.selectField(selAcceptPay.purpose, dataAcceptPay.purpose);

			cy.selectFieldAlternative(
				selAcceptPay.operationID,
				dataAcceptPay.operationID
			);
			cy.selectFieldAlternative(
				selAcceptPay.invoiceID,
				dataAcceptPay.invoiceID
			);
			cy.selectField(
				selAcceptPay.reasonSend,
				dataAcceptPay.reasonSendNew
			).selectSection(dataAcceptPay.reasonSendNew);
			cy.selectField(selAcceptPay.date, dataAcceptPay.date);
			cy.selectField(selAcceptPay.payeeName, dataAcceptPay.payeeName);
			cy.selectField(
				selAcceptPay.payeePersonalAcc,
				dataAcceptPay.payeePersonalAcc
			);
			cy.selectField(selAcceptPay.payeeBik, dataAcceptPay.payeeBik);
			cy.selectField(selAcceptPay.payerName, dataAcceptPay.payerName);
			cy.selectField(selAcceptPay.payerInn, dataAcceptPay.payerInn);
			cy.selectField(
				selAcceptPay.payerPersonalAcc,
				dataAcceptPay.payerPersonalAcc
			);
			cy.selectField(selAcceptPay.payerBik, dataAcceptPay.payerBik);

			cy.pressSave();

			cy.contains(sel.error).should("be.visible");
		});

		it("missing payeePersonalAcc", () => {
			cy.clickNotificationOfAcceptance();
			cy.pressButtonCreate();

			cy.selectField(selAcceptPay.amount, dataAcceptPay.amount);
			cy.selectField(
				selAcceptPay.currencyCode,
				dataAcceptPay.currencyCode
			);
			cy.selectField(selAcceptPay.purpose, dataAcceptPay.purpose);

			cy.selectFieldAlternative(
				selAcceptPay.operationID,
				dataAcceptPay.operationID
			);
			cy.selectFieldAlternative(
				selAcceptPay.invoiceID,
				dataAcceptPay.invoiceID
			);
			cy.selectField(
				selAcceptPay.reasonSend,
				dataAcceptPay.reasonSendNew
			).selectSection(dataAcceptPay.reasonSendNew);
			cy.selectField(selAcceptPay.date, dataAcceptPay.date);
			cy.selectField(selAcceptPay.payeeName, dataAcceptPay.payeeName);
			cy.selectField(selAcceptPay.payeeInn, dataAcceptPay.payeeInn);
			cy.selectField(selAcceptPay.payeeBik, dataAcceptPay.payeeBik);
			cy.selectField(selAcceptPay.payerName, dataAcceptPay.payerName);
			cy.selectField(selAcceptPay.payerInn, dataAcceptPay.payerInn);
			cy.selectField(
				selAcceptPay.payerPersonalAcc,
				dataAcceptPay.payerPersonalAcc
			);
			cy.selectField(selAcceptPay.payerBik, dataAcceptPay.payerBik);

			cy.pressSave();

			cy.contains(sel.error).should("be.visible");
		});

		it("missing payeeBik", () => {
			cy.clickNotificationOfAcceptance();
			cy.pressButtonCreate();

			cy.selectField(selAcceptPay.amount, dataAcceptPay.amount);
			cy.selectField(
				selAcceptPay.currencyCode,
				dataAcceptPay.currencyCode
			);
			cy.selectField(selAcceptPay.purpose, dataAcceptPay.purpose);

			cy.selectFieldAlternative(
				selAcceptPay.operationID,
				dataAcceptPay.operationID
			);
			cy.selectFieldAlternative(
				selAcceptPay.invoiceID,
				dataAcceptPay.invoiceID
			);
			cy.selectField(
				selAcceptPay.reasonSend,
				dataAcceptPay.reasonSendNew
			).selectSection(dataAcceptPay.reasonSendNew);
			cy.selectField(selAcceptPay.date, dataAcceptPay.date);
			cy.selectField(selAcceptPay.payeeName, dataAcceptPay.payeeName);
			cy.selectField(selAcceptPay.payeeInn, dataAcceptPay.payeeInn);
			cy.selectField(
				selAcceptPay.payeePersonalAcc,
				dataAcceptPay.payeePersonalAcc
			);
			cy.selectField(selAcceptPay.payerName, dataAcceptPay.payerName);
			cy.selectField(selAcceptPay.payerInn, dataAcceptPay.payerInn);
			cy.selectField(
				selAcceptPay.payerPersonalAcc,
				dataAcceptPay.payerPersonalAcc
			);
			cy.selectField(selAcceptPay.payerBik, dataAcceptPay.payerBik);

			cy.pressSave();

			cy.contains(sel.error).should("be.visible");
		});

		it("missing payerName", () => {
			cy.clickNotificationOfAcceptance();
			cy.pressButtonCreate();

			cy.selectField(selAcceptPay.amount, dataAcceptPay.amount);
			cy.selectField(
				selAcceptPay.currencyCode,
				dataAcceptPay.currencyCode
			);
			cy.selectField(selAcceptPay.purpose, dataAcceptPay.purpose);

			cy.selectFieldAlternative(
				selAcceptPay.operationID,
				dataAcceptPay.operationID
			);
			cy.selectFieldAlternative(
				selAcceptPay.invoiceID,
				dataAcceptPay.invoiceID
			);
			cy.selectField(
				selAcceptPay.reasonSend,
				dataAcceptPay.reasonSendNew
			).selectSection(dataAcceptPay.reasonSendNew);
			cy.selectField(selAcceptPay.date, dataAcceptPay.date);
			cy.selectField(selAcceptPay.payeeName, dataAcceptPay.payeeName);
			cy.selectField(selAcceptPay.payeeInn, dataAcceptPay.payeeInn);
			cy.selectField(
				selAcceptPay.payeePersonalAcc,
				dataAcceptPay.payeePersonalAcc
			);
			cy.selectField(selAcceptPay.payeeBik, dataAcceptPay.payeeBik);
			cy.selectField(selAcceptPay.payerInn, dataAcceptPay.payerInn);
			cy.selectField(
				selAcceptPay.payerPersonalAcc,
				dataAcceptPay.payerPersonalAcc
			);
			cy.selectField(selAcceptPay.payerBik, dataAcceptPay.payerBik);

			cy.pressSave();

			cy.contains(sel.error).should("be.visible");
		});

		it("missing payerInn", () => {
			cy.clickNotificationOfAcceptance();
			cy.pressButtonCreate();

			cy.selectField(selAcceptPay.amount, dataAcceptPay.amount);
			cy.selectField(
				selAcceptPay.currencyCode,
				dataAcceptPay.currencyCode
			);
			cy.selectField(selAcceptPay.purpose, dataAcceptPay.purpose);

			cy.selectFieldAlternative(
				selAcceptPay.operationID,
				dataAcceptPay.operationID
			);
			cy.selectFieldAlternative(
				selAcceptPay.invoiceID,
				dataAcceptPay.invoiceID
			);
			cy.selectField(
				selAcceptPay.reasonSend,
				dataAcceptPay.reasonSendNew
			).selectSection(dataAcceptPay.reasonSendNew);
			cy.selectField(selAcceptPay.date, dataAcceptPay.date);
			cy.selectField(selAcceptPay.payeeName, dataAcceptPay.payeeName);
			cy.selectField(selAcceptPay.payeeInn, dataAcceptPay.payeeInn);
			cy.selectField(
				selAcceptPay.payeePersonalAcc,
				dataAcceptPay.payeePersonalAcc
			);
			cy.selectField(selAcceptPay.payeeBik, dataAcceptPay.payeeBik);
			cy.selectField(selAcceptPay.payerName, dataAcceptPay.payerName);
			cy.selectField(
				selAcceptPay.payerPersonalAcc,
				dataAcceptPay.payerPersonalAcc
			);
			cy.selectField(selAcceptPay.payerBik, dataAcceptPay.payerBik);

			cy.pressSave();

			cy.contains(sel.error).should("be.visible");
		});

		it("missing payerPersonalAcc", () => {
			cy.clickNotificationOfAcceptance();
			cy.pressButtonCreate();

			cy.selectField(selAcceptPay.amount, dataAcceptPay.amount);
			cy.selectField(
				selAcceptPay.currencyCode,
				dataAcceptPay.currencyCode
			);
			cy.selectField(selAcceptPay.purpose, dataAcceptPay.purpose);

			cy.selectFieldAlternative(
				selAcceptPay.operationID,
				dataAcceptPay.operationID
			);
			cy.selectFieldAlternative(
				selAcceptPay.invoiceID,
				dataAcceptPay.invoiceID
			);
			cy.selectField(
				selAcceptPay.reasonSend,
				dataAcceptPay.reasonSendNew
			).selectSection(dataAcceptPay.reasonSendNew);
			cy.selectField(selAcceptPay.date, dataAcceptPay.date);
			cy.selectField(selAcceptPay.payeeName, dataAcceptPay.payeeName);
			cy.selectField(selAcceptPay.payeeInn, dataAcceptPay.payeeInn);
			cy.selectField(
				selAcceptPay.payeePersonalAcc,
				dataAcceptPay.payeePersonalAcc
			);
			cy.selectField(selAcceptPay.payeeBik, dataAcceptPay.payeeBik);
			cy.selectField(selAcceptPay.payerName, dataAcceptPay.payerName);
			cy.selectField(selAcceptPay.payerInn, dataAcceptPay.payerInn);
			cy.selectField(selAcceptPay.payerBik, dataAcceptPay.payerBik);

			cy.pressSave();

			cy.contains(sel.error).should("be.visible");
		});

		it("missing payerBik", () => {
			cy.clickNotificationOfAcceptance();
			cy.pressButtonCreate();

			cy.selectField(selAcceptPay.amount, dataAcceptPay.amount);
			cy.selectField(
				selAcceptPay.currencyCode,
				dataAcceptPay.currencyCode
			);
			cy.selectField(selAcceptPay.purpose, dataAcceptPay.purpose);

			cy.selectFieldAlternative(
				selAcceptPay.operationID,
				dataAcceptPay.operationID
			);
			cy.selectFieldAlternative(
				selAcceptPay.invoiceID,
				dataAcceptPay.invoiceID
			);
			cy.selectField(
				selAcceptPay.reasonSend,
				dataAcceptPay.reasonSendNew
			).selectSection(dataAcceptPay.reasonSendNew);
			cy.selectField(selAcceptPay.date, dataAcceptPay.date);
			cy.selectField(selAcceptPay.payeeName, dataAcceptPay.payeeName);
			cy.selectField(selAcceptPay.payeeInn, dataAcceptPay.payeeInn);
			cy.selectField(
				selAcceptPay.payeePersonalAcc,
				dataAcceptPay.payeePersonalAcc
			);
			cy.selectField(selAcceptPay.payeeBik, dataAcceptPay.payeeBik);
			cy.selectField(selAcceptPay.payerName, dataAcceptPay.payerName);
			cy.selectField(selAcceptPay.payerInn, dataAcceptPay.payerInn);
			cy.selectField(
				selAcceptPay.payerPersonalAcc,
				dataAcceptPay.payerPersonalAcc
			);

			cy.pressSave();

			cy.contains(sel.error).should("be.visible");
		});

		it("missing all fields", () => {
			cy.clickNotificationOfAcceptance();
			cy.pressButtonCreate();
			cy.pressSave();

			cy.contains(sel.error).should("be.visible");
		});
	});

	describe("field validation check", () => {
		it("check invoiceID: 60077274285462022-000000", () => {
			cy.clickNotificationOfAcceptance();
			cy.pressButtonCreate();

			cy.selectField(selAcceptPay.amount, dataAcceptPay.amount);
			cy.selectField(
				selAcceptPay.currencyCode,
				dataAcceptPay.currencyCode
			);
			cy.selectField(selAcceptPay.purpose, dataAcceptPay.purpose);

			cy.selectFieldAlternative(
				selAcceptPay.operationID,
				dataAcceptPay.operationID
			);
			cy.selectFieldAlternative(
				selAcceptPay.invoiceID,
				"60077274285462022-000000"
			);
			cy.selectField(
				selAcceptPay.reasonSend,
				dataAcceptPay.reasonSendNew
			).selectSection(dataAcceptPay.reasonSendNew);
			cy.selectField(selAcceptPay.date, dataAcceptPay.date);
			cy.selectField(selAcceptPay.payeeName, dataAcceptPay.payeeName);
			cy.selectField(selAcceptPay.payeeInn, dataAcceptPay.payeeInn);
			cy.selectField(
				selAcceptPay.payeePersonalAcc,
				dataAcceptPay.payeePersonalAcc
			);
			cy.selectField(selAcceptPay.payeeBik, dataAcceptPay.payeeBik);
			cy.selectField(selAcceptPay.payerName, dataAcceptPay.payerName);
			cy.selectField(selAcceptPay.payerInn, dataAcceptPay.payerInn);
			cy.selectField(
				selAcceptPay.payerPersonalAcc,
				dataAcceptPay.payerPersonalAcc
			);
			cy.selectField(selAcceptPay.payerBik, dataAcceptPay.payerBik);

			cy.pressSave();

			cy.contains(sel.error).should("be.visible");
		});

		it("check invoiceID: 6007727428546202200000001", () => {
			cy.clickNotificationOfAcceptance();
			cy.pressButtonCreate();

			cy.selectField(selAcceptPay.amount, dataAcceptPay.amount);
			cy.selectField(
				selAcceptPay.currencyCode,
				dataAcceptPay.currencyCode
			);
			cy.selectField(selAcceptPay.purpose, dataAcceptPay.purpose);

			cy.selectFieldAlternative(
				selAcceptPay.operationID,
				dataAcceptPay.operationID
			);
			cy.selectFieldAlternative(
				selAcceptPay.invoiceID,
				"6007727428546202200000001"
			);
			cy.selectField(
				selAcceptPay.reasonSend,
				dataAcceptPay.reasonSendNew
			).selectSection(dataAcceptPay.reasonSendNew);
			cy.selectField(selAcceptPay.date, dataAcceptPay.date);
			cy.selectField(selAcceptPay.payeeName, dataAcceptPay.payeeName);
			cy.selectField(selAcceptPay.payeeInn, dataAcceptPay.payeeInn);
			cy.selectField(
				selAcceptPay.payeePersonalAcc,
				dataAcceptPay.payeePersonalAcc
			);
			cy.selectField(selAcceptPay.payeeBik, dataAcceptPay.payeeBik);
			cy.selectField(selAcceptPay.payerName, dataAcceptPay.payerName);
			cy.selectField(selAcceptPay.payerInn, dataAcceptPay.payerInn);
			cy.selectField(
				selAcceptPay.payerPersonalAcc,
				dataAcceptPay.payerPersonalAcc
			);
			cy.selectField(selAcceptPay.payerBik, dataAcceptPay.payerBik);

			cy.pressSave();

			cy.contains(sel.error).should("be.visible");
		});

		it("check operationID: 1045017666006474270620181000000", () => {
			cy.clickNotificationOfAcceptance();
			cy.pressButtonCreate();

			cy.selectField(selAcceptPay.amount, dataAcceptPay.amount);
			cy.selectField(
				selAcceptPay.currencyCode,
				dataAcceptPay.currencyCode
			);
			cy.selectField(selAcceptPay.purpose, dataAcceptPay.purpose);

			cy.selectFieldAlternative(
				selAcceptPay.operationID,
				"1045017666006474270620181000000"
			);
			cy.selectFieldAlternative(
				selAcceptPay.invoiceID,
				dataAcceptPay.invoiceID
			);
			cy.selectField(
				selAcceptPay.reasonSend,
				dataAcceptPay.reasonSendNew
			).selectSection(dataAcceptPay.reasonSendNew);
			cy.selectField(selAcceptPay.date, dataAcceptPay.date);
			cy.selectField(selAcceptPay.payeeName, dataAcceptPay.payeeName);
			cy.selectField(selAcceptPay.payeeInn, dataAcceptPay.payeeInn);
			cy.selectField(
				selAcceptPay.payeePersonalAcc,
				dataAcceptPay.payeePersonalAcc
			);
			cy.selectField(selAcceptPay.payeeBik, dataAcceptPay.payeeBik);
			cy.selectField(selAcceptPay.payerName, dataAcceptPay.payerName);
			cy.selectField(selAcceptPay.payerInn, dataAcceptPay.payerInn);
			cy.selectField(
				selAcceptPay.payerPersonalAcc,
				dataAcceptPay.payerPersonalAcc
			);
			cy.selectField(selAcceptPay.payerBik, dataAcceptPay.payerBik);

			cy.pressSave();

			cy.contains(sel.error).should("be.visible");
		});

		it("check payeePersonalAcc: 19 digit value", () => {
			cy.clickNotificationOfAcceptance();
			cy.pressButtonCreate();

			cy.selectField(selAcceptPay.amount, dataAcceptPay.amount);
			cy.selectField(
				selAcceptPay.currencyCode,
				dataAcceptPay.currencyCode
			);
			cy.selectField(selAcceptPay.purpose, dataAcceptPay.purpose);

			cy.selectFieldAlternative(
				selAcceptPay.operationID,
				selAcceptPay.operationID
			);
			cy.selectFieldAlternative(
				selAcceptPay.invoiceID,
				dataAcceptPay.invoiceID
			);
			cy.selectField(
				selAcceptPay.reasonSend,
				dataAcceptPay.reasonSendNew
			).selectSection(dataAcceptPay.reasonSendNew);
			cy.selectField(selAcceptPay.date, dataAcceptPay.date);
			cy.selectField(selAcceptPay.payeeName, dataAcceptPay.payeeName);
			cy.selectField(selAcceptPay.payeeInn, dataAcceptPay.payeeInn);
			cy.selectField(
				selAcceptPay.payeePersonalAcc,
				"1234567890123456789"
			);
			cy.selectField(selAcceptPay.payeeBik, dataAcceptPay.payeeBik);
			cy.selectField(selAcceptPay.payerName, dataAcceptPay.payerName);
			cy.selectField(selAcceptPay.payerInn, dataAcceptPay.payerInn);
			cy.selectField(
				selAcceptPay.payerPersonalAcc,
				dataAcceptPay.payerPersonalAcc
			);
			cy.selectField(selAcceptPay.payerBik, dataAcceptPay.payerBik);

			cy.pressSave();

			cy.contains(sel.error).should("be.visible");
		});

		it("check payerPersonalAcc: 19 digit value", () => {
			cy.clickNotificationOfAcceptance();
			cy.pressButtonCreate();

			cy.selectField(selAcceptPay.amount, dataAcceptPay.amount);
			cy.selectField(
				selAcceptPay.currencyCode,
				dataAcceptPay.currencyCode
			);
			cy.selectField(selAcceptPay.purpose, dataAcceptPay.purpose);

			cy.selectFieldAlternative(
				selAcceptPay.operationID,
				selAcceptPay.operationID
			);
			cy.selectFieldAlternative(
				selAcceptPay.invoiceID,
				dataAcceptPay.invoiceID
			);
			cy.selectField(
				selAcceptPay.reasonSend,
				dataAcceptPay.reasonSendNew
			).selectSection(dataAcceptPay.reasonSendNew);
			cy.selectField(selAcceptPay.date, dataAcceptPay.date);
			cy.selectField(selAcceptPay.payeeName, dataAcceptPay.payeeName);
			cy.selectField(selAcceptPay.payeeInn, dataAcceptPay.payeeInn);
			cy.selectField(
				selAcceptPay.payeePersonalAcc,
				dataAcceptPay.payeePersonalAcc
			);
			cy.selectField(selAcceptPay.payeeBik, dataAcceptPay.payeeBik);
			cy.selectField(selAcceptPay.payerName, dataAcceptPay.payerName);
			cy.selectField(selAcceptPay.payerInn, dataAcceptPay.payerInn);
			cy.selectField(
				selAcceptPay.payerPersonalAcc,
				"1234567890123456789"
			);
			cy.selectField(selAcceptPay.payerBik, dataAcceptPay.payerBik);

			cy.pressSave();

			cy.contains(sel.error).should("be.visible");
		});

		it("check payeeInn: 9 digit value", () => {
			cy.clickNotificationOfAcceptance();
			cy.pressButtonCreate();

			cy.selectField(selAcceptPay.amount, dataAcceptPay.amount);
			cy.selectField(
				selAcceptPay.currencyCode,
				dataAcceptPay.currencyCode
			);
			cy.selectField(selAcceptPay.purpose, dataAcceptPay.purpose);

			cy.selectFieldAlternative(
				selAcceptPay.operationID,
				selAcceptPay.operationID
			);
			cy.selectFieldAlternative(
				selAcceptPay.invoiceID,
				dataAcceptPay.invoiceID
			);
			cy.selectField(
				selAcceptPay.reasonSend,
				dataAcceptPay.reasonSendNew
			).selectSection(dataAcceptPay.reasonSendNew);
			cy.selectField(selAcceptPay.date, dataAcceptPay.date);
			cy.selectField(selAcceptPay.payeeName, dataAcceptPay.payeeName);
			cy.selectField(selAcceptPay.payeeInn, "123456789");
			cy.selectField(
				selAcceptPay.payeePersonalAcc,
				dataAcceptPay.payeePersonalAcc
			);
			cy.selectField(selAcceptPay.payeeBik, dataAcceptPay.payeeBik);
			cy.selectField(selAcceptPay.payerName, dataAcceptPay.payerName);
			cy.selectField(selAcceptPay.payerInn, dataAcceptPay.payerInn);
			cy.selectField(
				selAcceptPay.payerPersonalAcc,
				selAcceptPay.payerPersonalAcc
			);
			cy.selectField(selAcceptPay.payerBik, dataAcceptPay.payerBik);

			cy.pressSave();

			cy.contains(sel.error).should("be.visible");
		});

		it("check payeeInn: 11 digit value", () => {
			cy.clickNotificationOfAcceptance();
			cy.pressButtonCreate();

			cy.selectField(selAcceptPay.amount, dataAcceptPay.amount);
			cy.selectField(
				selAcceptPay.currencyCode,
				dataAcceptPay.currencyCode
			);
			cy.selectField(selAcceptPay.purpose, dataAcceptPay.purpose);

			cy.selectFieldAlternative(
				selAcceptPay.operationID,
				selAcceptPay.operationID
			);
			cy.selectFieldAlternative(
				selAcceptPay.invoiceID,
				dataAcceptPay.invoiceID
			);
			cy.selectField(
				selAcceptPay.reasonSend,
				dataAcceptPay.reasonSendNew
			).selectSection(dataAcceptPay.reasonSendNew);
			cy.selectField(selAcceptPay.date, dataAcceptPay.date);
			cy.selectField(selAcceptPay.payeeName, dataAcceptPay.payeeName);
			cy.selectField(selAcceptPay.payeeInn, "12345678901");
			cy.selectField(
				selAcceptPay.payeePersonalAcc,
				dataAcceptPay.payeePersonalAcc
			);
			cy.selectField(selAcceptPay.payeeBik, dataAcceptPay.payeeBik);
			cy.selectField(selAcceptPay.payerName, dataAcceptPay.payerName);
			cy.selectField(selAcceptPay.payerInn, dataAcceptPay.payerInn);
			cy.selectField(
				selAcceptPay.payerPersonalAcc,
				selAcceptPay.payerPersonalAcc
			);
			cy.selectField(selAcceptPay.payerBik, dataAcceptPay.payerBik);

			cy.pressSave();

			cy.contains(sel.error).should("be.visible");
		});

		it("check payeeInn: 12 digit value", () => {
			cy.clickNotificationOfAcceptance();
			cy.pressButtonCreate();

			cy.selectField(selAcceptPay.amount, dataAcceptPay.amount);
			cy.selectField(
				selAcceptPay.currencyCode,
				dataAcceptPay.currencyCode
			);
			cy.selectField(selAcceptPay.purpose, dataAcceptPay.purpose);

			cy.selectFieldAlternative(
				selAcceptPay.operationID,
				selAcceptPay.operationID
			);
			cy.selectFieldAlternative(
				selAcceptPay.invoiceID,
				dataAcceptPay.invoiceID
			);
			cy.selectField(
				selAcceptPay.reasonSend,
				dataAcceptPay.reasonSendNew
			).selectSection(dataAcceptPay.reasonSendNew);
			cy.selectField(selAcceptPay.date, dataAcceptPay.date);
			cy.selectField(selAcceptPay.payeeName, dataAcceptPay.payeeName);
			cy.selectField(selAcceptPay.payeeInn, "123456789012");
			cy.selectField(
				selAcceptPay.payeePersonalAcc,
				dataAcceptPay.payeePersonalAcc
			);
			cy.selectField(selAcceptPay.payeeBik, dataAcceptPay.payeeBik);
			cy.selectField(selAcceptPay.payerName, dataAcceptPay.payerName);
			cy.selectField(selAcceptPay.payerInn, dataAcceptPay.payerInn);
			cy.selectField(
				selAcceptPay.payerPersonalAcc,
				selAcceptPay.payerPersonalAcc
			);
			cy.selectField(selAcceptPay.payerBik, dataAcceptPay.payerBik);

			cy.pressSave();

			cy.contains(sel.error).should("be.visible");
		});

		it("check payerInn: 9 digit value", () => {
			cy.clickNotificationOfAcceptance();
			cy.pressButtonCreate();

			cy.selectField(selAcceptPay.amount, dataAcceptPay.amount);
			cy.selectField(
				selAcceptPay.currencyCode,
				dataAcceptPay.currencyCode
			);
			cy.selectField(selAcceptPay.purpose, dataAcceptPay.purpose);

			cy.selectFieldAlternative(
				selAcceptPay.operationID,
				selAcceptPay.operationID
			);
			cy.selectFieldAlternative(
				selAcceptPay.invoiceID,
				dataAcceptPay.invoiceID
			);
			cy.selectField(
				selAcceptPay.reasonSend,
				dataAcceptPay.reasonSendNew
			).selectSection(dataAcceptPay.reasonSendNew);
			cy.selectField(selAcceptPay.date, dataAcceptPay.date);
			cy.selectField(selAcceptPay.payeeName, dataAcceptPay.payeeName);
			cy.selectField(selAcceptPay.payeeInn, dataAcceptPay.payeeInn);
			cy.selectField(
				selAcceptPay.payeePersonalAcc,
				dataAcceptPay.payeePersonalAcc
			);
			cy.selectField(selAcceptPay.payeeBik, dataAcceptPay.payeeBik);
			cy.selectField(selAcceptPay.payerName, dataAcceptPay.payerName);
			cy.selectField(selAcceptPay.payerInn, "123456789");
			cy.selectField(
				selAcceptPay.payerPersonalAcc,
				selAcceptPay.payerPersonalAcc
			);
			cy.selectField(selAcceptPay.payerBik, dataAcceptPay.payerBik);

			cy.pressSave();

			cy.contains(sel.error).should("be.visible");
		});

		it("check payerInn: 11 digit value", () => {
			cy.clickNotificationOfAcceptance();
			cy.pressButtonCreate();

			cy.selectField(selAcceptPay.amount, dataAcceptPay.amount);
			cy.selectField(
				selAcceptPay.currencyCode,
				dataAcceptPay.currencyCode
			);
			cy.selectField(selAcceptPay.purpose, dataAcceptPay.purpose);

			cy.selectFieldAlternative(
				selAcceptPay.operationID,
				selAcceptPay.operationID
			);
			cy.selectFieldAlternative(
				selAcceptPay.invoiceID,
				dataAcceptPay.invoiceID
			);
			cy.selectField(
				selAcceptPay.reasonSend,
				dataAcceptPay.reasonSendNew
			).selectSection(dataAcceptPay.reasonSendNew);
			cy.selectField(selAcceptPay.date, dataAcceptPay.date);
			cy.selectField(selAcceptPay.payeeName, dataAcceptPay.payeeName);
			cy.selectField(selAcceptPay.payeeInn, dataAcceptPay.payeeInn);
			cy.selectField(
				selAcceptPay.payeePersonalAcc,
				dataAcceptPay.payeePersonalAcc
			);
			cy.selectField(selAcceptPay.payeeBik, dataAcceptPay.payeeBik);
			cy.selectField(selAcceptPay.payerName, dataAcceptPay.payerName);
			cy.selectField(selAcceptPay.payerInn, "12345678901");
			cy.selectField(
				selAcceptPay.payerPersonalAcc,
				selAcceptPay.payerPersonalAcc
			);
			cy.selectField(selAcceptPay.payerBik, dataAcceptPay.payerBik);

			cy.pressSave();

			cy.contains(sel.error).should("be.visible");
		});

		it("check payerInn: 12 digit value", () => {
			cy.clickNotificationOfAcceptance();
			cy.pressButtonCreate();

			cy.selectField(selAcceptPay.amount, dataAcceptPay.amount);
			cy.selectField(
				selAcceptPay.currencyCode,
				dataAcceptPay.currencyCode
			);
			cy.selectField(selAcceptPay.purpose, dataAcceptPay.purpose);

			cy.selectFieldAlternative(
				selAcceptPay.operationID,
				selAcceptPay.operationID
			);
			cy.selectFieldAlternative(
				selAcceptPay.invoiceID,
				dataAcceptPay.invoiceID
			);
			cy.selectField(
				selAcceptPay.reasonSend,
				dataAcceptPay.reasonSendNew
			).selectSection(dataAcceptPay.reasonSendNew);
			cy.selectField(selAcceptPay.date, dataAcceptPay.date);
			cy.selectField(selAcceptPay.payeeName, dataAcceptPay.payeeName);
			cy.selectField(selAcceptPay.payeeInn, dataAcceptPay.payeeInn);
			cy.selectField(
				selAcceptPay.payeePersonalAcc,
				dataAcceptPay.payeePersonalAcc
			);
			cy.selectField(selAcceptPay.payeeBik, dataAcceptPay.payeeBik);
			cy.selectField(selAcceptPay.payerName, dataAcceptPay.payerName);
			cy.selectField(selAcceptPay.payerInn, "123456789012");
			cy.selectField(
				selAcceptPay.payerPersonalAcc,
				selAcceptPay.payerPersonalAcc
			);
			cy.selectField(selAcceptPay.payerBik, dataAcceptPay.payerBik);

			cy.pressSave();

			cy.contains(sel.error).should("be.visible");
		});

		it("check payeeKpp: 8 digit value", () => {
			cy.clickNotificationOfAcceptance();
			cy.pressButtonCreate();

			cy.selectField(selAcceptPay.amount, dataAcceptPay.amount);
			cy.selectField(
				selAcceptPay.currencyCode,
				dataAcceptPay.currencyCode
			);
			cy.selectField(selAcceptPay.purpose, dataAcceptPay.purpose);

			cy.selectFieldAlternative(
				selAcceptPay.operationID,
				selAcceptPay.operationID
			);
			cy.selectFieldAlternative(
				selAcceptPay.invoiceID,
				dataAcceptPay.invoiceID
			);
			cy.selectField(
				selAcceptPay.reasonSend,
				dataAcceptPay.reasonSendNew
			).selectSection(dataAcceptPay.reasonSendNew);
			cy.selectField(selAcceptPay.date, dataAcceptPay.date);
			cy.selectField(selAcceptPay.payeeName, dataAcceptPay.payeeName);
			cy.selectField(selAcceptPay.payeeInn, dataAcceptPay.payeeInn);
			cy.selectField(
				selAcceptPay.payeePersonalAcc,
				dataAcceptPay.payeePersonalAcc
			);
			cy.selectField(selAcceptPay.payeeBik, dataAcceptPay.payeeBik);
			cy.selectField(selAcceptPay.payerName, dataAcceptPay.payerName);
			cy.selectField(selAcceptPay.payerInn, dataAcceptPay.payerInn);
			cy.selectField(
				selAcceptPay.payerPersonalAcc,
				selAcceptPay.payerPersonalAcc
			);
			cy.selectField(selAcceptPay.payerBik, dataAcceptPay.payerBik);
			cy.selectField(selAcceptPay.payeeKpp, "12345678");

			cy.pressSave();

			cy.contains(sel.error).should("be.visible");
		});

		it("check payeeKpp: value of 9 zeros", () => {
			cy.clickNotificationOfAcceptance();
			cy.pressButtonCreate();

			cy.selectField(selAcceptPay.amount, dataAcceptPay.amount);
			cy.selectField(
				selAcceptPay.currencyCode,
				dataAcceptPay.currencyCode
			);
			cy.selectField(selAcceptPay.purpose, dataAcceptPay.purpose);

			cy.selectFieldAlternative(
				selAcceptPay.operationID,
				selAcceptPay.operationID
			);
			cy.selectFieldAlternative(
				selAcceptPay.invoiceID,
				dataAcceptPay.invoiceID
			);
			cy.selectField(
				selAcceptPay.reasonSend,
				dataAcceptPay.reasonSendNew
			).selectSection(dataAcceptPay.reasonSendNew);
			cy.selectField(selAcceptPay.date, dataAcceptPay.date);
			cy.selectField(selAcceptPay.payeeName, dataAcceptPay.payeeName);
			cy.selectField(selAcceptPay.payeeInn, dataAcceptPay.payeeInn);
			cy.selectField(
				selAcceptPay.payeePersonalAcc,
				dataAcceptPay.payeePersonalAcc
			);
			cy.selectField(selAcceptPay.payeeBik, dataAcceptPay.payeeBik);
			cy.selectField(selAcceptPay.payerName, dataAcceptPay.payerName);
			cy.selectField(selAcceptPay.payerInn, dataAcceptPay.payerInn);
			cy.selectField(
				selAcceptPay.payerPersonalAcc,
				selAcceptPay.payerPersonalAcc
			);
			cy.selectField(selAcceptPay.payerBik, dataAcceptPay.payerBik);
			cy.selectField(selAcceptPay.payeeKpp, "000000000");

			cy.pressSave();

			cy.contains(sel.error).should("be.visible");
		});

		it("check payerKpp: 8 digit value", () => {
			cy.clickNotificationOfAcceptance();
			cy.pressButtonCreate();

			cy.selectField(selAcceptPay.amount, dataAcceptPay.amount);
			cy.selectField(
				selAcceptPay.currencyCode,
				dataAcceptPay.currencyCode
			);
			cy.selectField(selAcceptPay.purpose, dataAcceptPay.purpose);

			cy.selectFieldAlternative(
				selAcceptPay.operationID,
				selAcceptPay.operationID
			);
			cy.selectFieldAlternative(
				selAcceptPay.invoiceID,
				dataAcceptPay.invoiceID
			);
			cy.selectField(
				selAcceptPay.reasonSend,
				dataAcceptPay.reasonSendNew
			).selectSection(dataAcceptPay.reasonSendNew);
			cy.selectField(selAcceptPay.date, dataAcceptPay.date);
			cy.selectField(selAcceptPay.payeeName, dataAcceptPay.payeeName);
			cy.selectField(selAcceptPay.payeeInn, dataAcceptPay.payeeInn);
			cy.selectField(
				selAcceptPay.payeePersonalAcc,
				dataAcceptPay.payeePersonalAcc
			);
			cy.selectField(selAcceptPay.payeeBik, dataAcceptPay.payeeBik);
			cy.selectField(selAcceptPay.payerName, dataAcceptPay.payerName);
			cy.selectField(selAcceptPay.payerInn, dataAcceptPay.payerInn);
			cy.selectField(
				selAcceptPay.payerPersonalAcc,
				selAcceptPay.payerPersonalAcc
			);
			cy.selectField(selAcceptPay.payerBik, dataAcceptPay.payerBik);
			cy.selectField(selAcceptPay.payerKpp, "12345678");

			cy.pressSave();

			cy.contains(sel.error).should("be.visible");
		});

		it("check payerKpp: value of 9 zeros", () => {
			cy.clickNotificationOfAcceptance();
			cy.pressButtonCreate();

			cy.selectField(selAcceptPay.amount, dataAcceptPay.amount);
			cy.selectField(
				selAcceptPay.currencyCode,
				dataAcceptPay.currencyCode
			);
			cy.selectField(selAcceptPay.purpose, dataAcceptPay.purpose);

			cy.selectFieldAlternative(
				selAcceptPay.operationID,
				selAcceptPay.operationID
			);
			cy.selectFieldAlternative(
				selAcceptPay.invoiceID,
				dataAcceptPay.invoiceID
			);
			cy.selectField(
				selAcceptPay.reasonSend,
				dataAcceptPay.reasonSendNew
			).selectSection(dataAcceptPay.reasonSendNew);
			cy.selectField(selAcceptPay.date, dataAcceptPay.date);
			cy.selectField(selAcceptPay.payeeName, dataAcceptPay.payeeName);
			cy.selectField(selAcceptPay.payeeInn, dataAcceptPay.payeeInn);
			cy.selectField(
				selAcceptPay.payeePersonalAcc,
				dataAcceptPay.payeePersonalAcc
			);
			cy.selectField(selAcceptPay.payeeBik, dataAcceptPay.payeeBik);
			cy.selectField(selAcceptPay.payerName, dataAcceptPay.payerName);
			cy.selectField(selAcceptPay.payerInn, dataAcceptPay.payerInn);
			cy.selectField(
				selAcceptPay.payerPersonalAcc,
				selAcceptPay.payerPersonalAcc
			);
			cy.selectField(selAcceptPay.payerBik, dataAcceptPay.payerBik);
			cy.selectField(selAcceptPay.payerKpp, "000000000");

			cy.pressSave();

			cy.contains(sel.error).should("be.visible");
		});
	});
});
