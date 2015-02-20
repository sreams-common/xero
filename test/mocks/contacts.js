module.exports = {
  
  'GET /Contacts': {
    "Id": "d1932784-ebf2-4aec-8c1e-cfe9227ed92a",
    "Status": "OK",
    "ProviderName": "Test",
    "DateTimeUTC": "\/Date(1405576327695)\/",
    "Contacts": [
      {
	    "ContactID": "bd2270c3-8706-4c11-9cfb-000b551c3f51",
	    "ContactStatus": "ACTIVE",
	    "Name": "ABC Limited",
	    "FirstName": "Andrea",
	    "LastName": "Dutchess",
	    "EmailAddress": "a.dutchess@abclimited.com",
	    "SkypeUserName": "skype.dutchess@abclimited.com",
	    "BankAccountDetails": "skype.dutchess@abclimited.com",
	    "TaxNumber": "skype.dutchess@abclimited.com",
	    "AccountsReceivableTaxType": "INPUT2",
	    "AccountsPayableTaxType": "OUTPUT2",
	    "Addresses": [
	      {
	        "AddressType": "POBOX",
          	"AddressLine1": "P O Box 123",
	        "City": "Wellington",
	        "PostalCode": "6011",
	        "AttentionTo": "Andrea"
	      },
	      {
	        "AddressType": "STREET"
	      }
	    ],
	    "Phones": [
	      {
	        "PhoneType": "DEFAULT",
	        "PhoneNumber": "1111111",
	        "PhoneAreaCode": "04",
	        "PhoneCountryCode": "64"
	      },{
	        "PhoneType": "FAX"
	      },{
	        "PhoneType": "MOBILE"
	      },{
	        "PhoneType": "DDI"
	      }
	    ],
	    "UpdatedDateUTC": "\/Date(1405576327695)\/",
	    "IsSupplier": "false",
	    "IsCustomer": "true",
	    "DefaultCurrency": "NZD"
      }
    ]
  },
  
  
  'GET /Contacts/bd2270c3-8706-4c11-9cfb-000b551c3f51': {
    "Id": "021411a2-5aec-466c-8310-48f6e49ec44f",
    "Status": "OK",
    "ProviderName": "Test",
    "DateTimeUTC": "\/Date(1405576329598)\/",
    "Contacts": [
      {
	    "ContactID": "bd2270c3-8706-4c11-9cfb-000b551c3f51",
	    "ContactStatus": "ACTIVE",
	    "Name": "ABC Limited",
	    "FirstName": "Andrea",
	    "LastName": "Dutchess",
	    "EmailAddress": "a.dutchess@abclimited.com",
	    "SkypeUserName": "skype.dutchess@abclimited.com",
	    "BankAccountDetails": "skype.dutchess@abclimited.com",
	    "TaxNumber": "skype.dutchess@abclimited.com",
	    "AccountsReceivableTaxType": "INPUT2",
	    "AccountsPayableTaxType": "OUTPUT2",
	    "Addresses": [
	      {
	        "AddressType": "POBOX",
          	"AddressLine1": "P O Box 123",
	        "City": "Wellington",
	        "PostalCode": "6011",
	        "AttentionTo": "Andrea"
	      },
	      {
	        "AddressType": "STREET"
	      }
	    ],
	    "Phones": [
	      {
	        "PhoneType": "DEFAULT",
	        "PhoneNumber": "1111111",
	        "PhoneAreaCode": "04",
	        "PhoneCountryCode": "64"
	      },{
	        "PhoneType": "FAX"
	      },{
	        "PhoneType": "MOBILE"
	      },{
	        "PhoneType": "DDI"
	      }
	    ],
	    "UpdatedDateUTC": "\/Date(1405576327695)\/",
	    "IsSupplier": "false",
	    "IsCustomer": "true",
	    "DefaultCurrency": "NZD",
	   	"Balances": {
	      "AccountsReceivable": {
	        "Outstanding": "849.50",
	        "Overdue": "910.00"
	      },
	      "AccountsPayable": {
	        "Outstanding": "0.00",
	        "Overdue": "0.00"
	      }
	    },
	    "BatchPayments": {
	        "BankAccountNumber": "123456",
	        "BankAccountName": "bank",
	        "Details": "details"
	    },
	    "PaymentTerms": {
	        "Bills": {
	          "Day": "4",
	          "Type": "OFFOLLOWINGMONTH"
	        },
	        "Sales": {
	          "Day": "2",
	          "Type": "OFFOLLOWINGMONTH"
	        }
	    }
      }
    ]
  },

  'POST /Contacts': {
    "Id": "d1932784-ebf2-4aec-8c1e-cfe9227ed92a",
    "Status": "OK",
    "ProviderName": "Test",
    "DateTimeUTC": "\/Date(1405576327695)\/",
    "Contacts": [
      {
      	"ContactID": "bd2270c3-8706-4c11-9cfb-000b551c3f51",
	    "ContactStatus": "ACTIVE",
	    "Name": "ABC Limited",
	    "FirstName": "Andrea",
	    "LastName": "Dutchess",
	    "EmailAddress": "a.dutchess@abclimited.com",
	    "SkypeUserName": "skype.dutchess@abclimited.com",
	    "BankAccountDetails": "skype.dutchess@abclimited.com",
	    "TaxNumber": "skype.dutchess@abclimited.com",
	    "AccountsReceivableTaxType": "INPUT2",
	    "AccountsPayableTaxType": "OUTPUT2",
	    "Addresses": [
	      {
	        "AddressType": "POBOX",
          	"AddressLine1": "P O Box 123",
	        "City": "Wellington",
	        "PostalCode": "6011",
	        "AttentionTo": "Andrea"
	      },
	      {
	        "AddressType": "STREET"
	      }
	    ],
	    "Phones": [
	      {
	        "PhoneType": "DEFAULT",
	        "PhoneNumber": "1111111",
	        "PhoneAreaCode": "04",
	        "PhoneCountryCode": "64"
	      },{
	        "PhoneType": "FAX"
	      },{
	        "PhoneType": "MOBILE"
	      },{
	        "PhoneType": "DDI"
	      }
	    ],
	    "UpdatedDateUTC": "\/Date(1405576327695)\/",
	    "IsSupplier": "false",
	    "IsCustomer": "true",
	    "DefaultCurrency": "NZD"
      }
    ]
  },
  
  
  'POST /Contacts/bd2270c3-8706-4c11-9cfb-000b551c3f51': {
    "Id": "021411a2-5aec-466c-8310-48f6e49ec44f",
    "Status": "OK",
    "ProviderName": "Test",
    "DateTimeUTC": "\/Date(1405576329598)\/",
    "Contacts": [
      {
	    "ContactID": "bd2270c3-8706-4c11-9cfb-000b551c3f51",
	    "ContactStatus": "ACTIVE",
	    "Name": "ABC Limited Company",
	    "FirstName": "Andrea",
	    "LastName": "Dutchess",
	    "EmailAddress": "a.dutchess@abclimited.com",
	    "SkypeUserName": "skype.dutchess@abclimited.com",
	    "BankAccountDetails": "skype.dutchess@abclimited.com",
	    "TaxNumber": "skype.dutchess@abclimited.com",
	    "AccountsReceivableTaxType": "INPUT2",
	    "AccountsPayableTaxType": "OUTPUT2",
	    "Addresses": [
	      {
	        "AddressType": "POBOX",
          	"AddressLine1": "P O Box 123",
	        "City": "Wellington",
	        "PostalCode": "6011",
	        "AttentionTo": "Andrea"
	      },
	      {
	        "AddressType": "STREET"
	      }
	    ],
	    "Phones": [
	      {
	        "PhoneType": "DEFAULT",
	        "PhoneNumber": "1111111",
	        "PhoneAreaCode": "04",
	        "PhoneCountryCode": "64"
	      },{
	        "PhoneType": "FAX"
	      },{
	        "PhoneType": "MOBILE"
	      },{
	        "PhoneType": "DDI"
	      }
	    ],
	    "UpdatedDateUTC": "\/Date(1405576327695)\/",
	    "IsSupplier": "false",
	    "IsCustomer": "true",
	    "DefaultCurrency": "NZD",
	   	"Balances": {
	      "AccountsReceivable": {
	        "Outstanding": "849.50",
	        "Overdue": "910.00"
	      },
	      "AccountsPayable": {
	        "Outstanding": "0.00",
	        "Overdue": "0.00"
	      }
	    },
	    "BatchPayments": {
	        "BankAccountNumber": "123456",
	        "BankAccountName": "bank",
	        "Details": "details"
	    },
	    "PaymentTerms": {
	        "Bills": {
	          "Day": "4",
	          "Type": "OFFOLLOWINGMONTH"
	        },
	        "Sales": {
	          "Day": "2",
	          "Type": "OFFOLLOWINGMONTH"
	        }
	    }
      }
    ]
  }
};