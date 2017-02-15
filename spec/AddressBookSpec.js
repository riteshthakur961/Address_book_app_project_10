describe('Address Book', function() {
    var addressbook,
        thisContact;

    beforeEach(function() {
        addressbook = new AddressBook();
        thisContact = new Contact();
    });

    it('should be able to add a contact', function() {

        addressbook.addContact(thisContact);

        expect(addressbook.getContact(0)).toBe(thisContact);
    });

    it('should be able to delete a contact', function() {

        addressbook.addContact(thisContact);
        addressbook.deleteContact(0);

        expect(addressbook.getContact(0)).not.toBeDefined();
    });
});

describe('Async AddressBook', function() {
    var addressBook = new AddressBook();

    beforeEach(function(done){
        addressBook.getInitialContacts(function() {
            done();
        });
    });

    it('should be able to load initialContacts', function(done) {
        expect(addressBook.initialComplete).toBe(true);
        done();
    });
});