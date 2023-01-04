import { BCCharacterSheet } from './sheets.js';
Hooks.once('init', () => {
	BCCharacterSheet.register();
});
