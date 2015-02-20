var should = require('should'),
    xero = require('./mocks/xero'),
    mockResponses = require('./mocks/contacts');


describe('Contacts', function () {
  beforeEach(function () {
    xero.oa.responses = mockResponses;
  });
  
  describe('#all', function () {
    it('should get a list of Contacts', function () {
      xero.Contacts.all(function (err, contacts) {
        contacts.should.be.an.instanceOf(Array);
        contacts.length.should.be.above(0);
      });
    });
  });
  
  
  describe('#find', function () {
    it('should find a single Contact', function () {
      xero.Contacts.find('bd2270c3-8706-4c11-9cfb-000b551c3f51', function (err, contact) {
        contact.should.have.properties('ContactID', 'Name', 'FirstName', 'LastName');
      });
    });
  });

 describe('#create', function () {
    it('should create an Contact', function () {
      
      xero.Contacts.create({ Name: 'ABC Limited' }, function (err, contact) {
        contact.should.have.properties('ContactID', 'Name', 'Addresses');
        contact.Name.should.containEql('ABC Limited');
      });
    });
  });
  
  
  describe('#update', function () {
    it('should update a single Contact', function () {
      xero.Contacts.update('bd2270c3-8706-4c11-9cfb-000b551c3f51', { Name: 'ABC Limited Company' }, function (err, contact) {
        contact.should.have.properties('ContactID', 'Name', 'Addresses');
        contact.Name.should.containEql('ABC Limited Company');
        contact.ContactID.should.containEql('bd2270c3-8706-4c11-9cfb-000b551c3f51');
      });
    });
  });
});