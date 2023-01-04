export class BCCharacterSheet extends ActorSheet {
	static get defaultOptions() {
		return mergeObject(super.defaultOptions, {
			classes: ['BC-Sheet', 'sheet', 'actor', 'worldbuilding'],
			template: './modules/bc-actors/templates/character-sheet.hbs',
			width: 600,
			height: 600,
		});
	}
	static register() {
		const currentSystem = game.data.system.id;
		Actors.registerSheet(currentSystem, BCCharacterSheet, {
			types: ['character'],
			templates: {
				fields: {
					action: 2,
					guts: 2,
					knowledge: 2,
					society: 2,
					wild: 2,
					crime: 2,
				},
				skills: {
					fight: 1,
					leadership: 1,
					stunt: 1,
					cool: 1,
					drive: 1,
					shoot: 1,
					culture: 1,
					firstAid: 1,
					tech: 1,
					charm: 1,
					eloquence: 1,
					observation: 1,
					scout: 1,
					survival: 1,
					tough: 1,
					alert: 1,
					dexterity: 1,
					stealth: 1,
				},
			},
			character: {
				templates: ['fields', 'skills'],
				id: {
					callMe: '',
					heritage: '',
					homeland: '',
					workplace: '',
					wordsToLiveBy: '',
				},
				feelings: {
					powerful: false,
					daring: false,
					focused: false,
					confident: false,
					fierce: false,
					untouchable: false,
					bleeding: false,
					shocked: false,
					dizzy: false,
					embarrassed: false,
					broken: false,
					scared: false,
					feeling_1: false,
					feeling_2: false,
					feeling_3: false,
					feeling_4: false,
				},
				expertise: {
					expertise_1: '',
					expertise_2: '',
					expertise_3: '',
					expertise_4: '',
					expertise_5: '',
					expertise_6: '',
				},
				scars: {
					scars_1: '',
					scars_2: '',
					scars_3: '',
					scars_4: '',
					scars_5: '',
					scars_6: '',
				},
				weapons: {
					weapon_1: {
						name: '',
						description: '',
					},
					weapon_2: {
						name: '',
						description: '',
					},
					weapon_3: {
						name: '',
						description: '',
					},
					weapon_4: {
						name: '',
						description: '',
					},
					weapon_5: {
						name: '',
						description: '',
					},
					weapon_6: {
						name: '',
						description: '',
					},
				},
			},
			makeDefault: true,
		});
	}

	constructor(...args) {
		super(...args);
	}
}
