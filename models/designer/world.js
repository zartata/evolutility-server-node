/*
  Evolutility DB Model for Worlds
  https://github.com/evoluteur/evolutility-server-node
*/

module.exports = {
	"id": "world",
	"pkey": "id",
	"table": "evol_world",
	"titleField": "name",
	"fields": [
		{
			"id": "name",
			"type": "text",
			"label": "Name",
			"required": true,
			"maxLength": 100,
			"inMany": true,
			"column": "name"
		},
		{
			"id": "active",
			"type": "boolean",
			"label": "Active",
			"inMany": true,
			"column": "active"
		},
		{
			"id": "description",
			"type": "textmultiline",
			"label": "Description",
			"maxLength": 500,
			"column": "description"
		},
		{
			"id": "position",
			"type": "integer",
			"label": "Position",
			"maxLength": 3,
			"column": "position"
		}
	],
	"collections": [
		{
			"id": "collec-objects",
			"table": "evol_object",
			"column": "world_id",
			"object": "object",
			"fields": [
				{
					"id": "title",
					"type": "text",
					"label": "Title",
					"column": "title"
				},
				{
					"label": "Icon",
					"type": "text",
					"id": "icon",
					"column": "icon",
				},
				{
					"id": "active",
					"type": "boolean",
					"label": "Active",
					"column": "active"
				},
			]
		}
	]
}