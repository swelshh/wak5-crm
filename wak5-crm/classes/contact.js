﻿//Creating the Contact classmodel.Contact = new DataClass("Contact");//Add Contact attributes.model.Contact.ID = new Attribute("storage", "long", "key auto");model.Contact.firstName = new Attribute("storage", "string", "btree");model.Contact.lastName = new Attribute("storage", "string", "btree");model.Contact.title = new Attribute("storage", "string", "btree");model.Contact.phone = new Attribute("storage", "string", "btree");model.Contact.fax = new Attribute("storage", "string", "btree");model.Contact.mobile = new Attribute("storage", "string", "btree");model.Contact.emailAccnt = new Attribute("storage", "string", "btree");model.Contact.street = new Attribute("storage", "string", "btree");model.Contact.city = new Attribute("storage", "string", "btree");model.Contact.state = new Attribute("storage", "string", "btree");model.Contact.zip = new Attribute("storage", "string", "btree");model.Contact.country = new Attribute("storage", "string", "btree");model.Contact.owner = new Attribute("relatedEntity", "User", "User"); // relation to the User class