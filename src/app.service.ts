import { Injectable } from '@nestjs/common';
const { Pesa } = require('@openpesa/pesa-js');

@Injectable()
export class AppService {

  getHello(): string {
    return 'Hello World!';
  }

  async doC2b() : Promise<any> {

    let publicKey =
    'MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEArv9yxA69XQKBo24BaF/D+fvlqmGdYjqLQ5WtNBb5tquqGvAvG3WMFETVUSow/LizQalxj2ElMVrUmzu5mGGkxK08bWEXF7a1DEvtVJs6nppIlFJc2SnrU14AOrIrB28ogm58JjAl5BOQawOXD5dfSk7MaAA82pVHoIqEu0FxA8BOKU+RGTihRU+ptw1j4bsAJYiPbSX6i71gfPvwHPYamM0bfI4CmlsUUR3KvCG24rB6FNPcRBhM3jDuv8ae2kC33w9hEq8qNB55uw51vK7hyXoAa+U7IqP1y6nBdlN25gkxEA8yrsl1678cspeXr+3ciRyqoRgj9RD/ONbJhhxFvt1cLBh+qwK2eqISfBb06eRnNeC71oBokDm3zyCnkOtMDGl7IvnMfZfEPFCfg5QgJVk1msPpRvQxmEsrX9MQRyFVzgy2CWNIb7c+jPapyrNwoUbANlN8adU1m6yOuoX7F49x+OjiG2se0EJ6nafeKUXw/+hiJZvELUYgzKUtMAZVTNZfT8jjb58j8GVtuS+6TM2AutbejaCV84ZK58E2CRJqhmjQibEUO6KPdD7oTlEkFy52Y1uOOBXgYpqMzufNPmfdqqqSM4dU70PO8ogyKGiLAIxCetMjjm6FCMEA3Kc8K0Ig7/XtFm9By6VxTJK1Mg36TlHaZKP6VzVLXMtesJECAwEAAQ==';
    let apiKey = '';

    let pesa = new Pesa({api_key: apiKey,public_key: publicKey,},'sandbox',);

    let data = {
        input_Amount: 5000,
        input_CustomerMSISDN: '000000000001',
        input_Country: 'TZN',
        input_Currency: 'TZS',
        input_ServiceProviderCode: '000000',
        input_TransactionReference: 'T123444Z',
        input_ThirdPartyConversationID: '1e9b744d1da34af78412a598cbc28f5d',
        input_PurchasedItemsDesc: 'Test Th4reeItem',
    };
    try {
        return  await pesa.c2b(data);
    } catch (error) {
        console.log(error);

    }

    }

}
