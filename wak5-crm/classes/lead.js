﻿//Creating the Lead classmodel.Lead = new DataClass("Leads");//Add Lead attributes.model.Lead.ID = new Attribute("storage", "long", "key auto");model.Lead.firstName = new Attribute("storage", "string", "btree");model.Lead.lastName = new Attribute("storage", "string", "btree");model.Lead.title = new Attribute("storage", "string", "btree");model.Lead.phone = new Attribute("storage", "string", "btree");model.Lead.fax = new Attribute("storage", "string", "btree");model.Lead.mobile = new Attribute("storage", "string", "btree");model.Lead.emailAccnt = new Attribute("storage", "string", "btree");model.Lead.street = new Attribute("storage", "string", "btree");model.Lead.city = new Attribute("storage", "string", "btree");model.Lead.state = new Attribute("storage", "string", "btree");model.Lead.zip = new Attribute("storage", "string", "btree");model.Lead.country = new Attribute("storage", "string", "btree");model.Lead.owner = new Attribute("relatedEntity", "User", "User"); // relation to the User class