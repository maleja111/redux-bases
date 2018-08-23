import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Cards } from './cards';

export class CardsData implements InMemoryDbService {

    createDb() {
        const cards: Cards[] = [
            {
                'id': 1,
                'level': 'Level 5',
                'name': 'The Archer',
                'description': `The Archer is a female warrior with sharp eyes.
                She wears a short, light green dress, a hooded cape, a leather belt and an attached small pouch.`,
                'stat': [{ stat: 25, value: 'Training' }, { stat: 24, value: 'Speed' },
                { stat: 300, value: 'Cost' }]
            }
        ];
        return { cards };
    }
}
