    export interface Indicatif {
        'Présent': string[];
        'Passé composé': string[];
        'Imparfait': string[];
        'Plus-que-parfait': string[];
        'Passé simple': string[];
        'Passé antérieur': string[];
        'Futur simple': string[];
        'Futur antérieur': string[];
    }

    export interface Subjonctif {
        'Présent': string[];
        'Passé': string[];
        'Imparfait': string[];
        'Plus-que-parfait': string[];
    }

    export interface Conditionnel {
        'Présent': string[];
        'Passé 1ère forme': string[];
        'Passé 2ème forme': string[];
    }

    export interface Impératif {
        'Présent': string[];
        'Passé': string[];
    }

    export interface Infinitif {
        'Présent': string[];
        'Passé': string[];
    }

    export interface Participe {
        'Présent': string[];
        'Passé': string[];
    }

    export interface Verb {
        Indicatif?: Indicatif;
        Subjonctif?: Subjonctif;
        Conditionnel?: Conditionnel;
        Impératif?: Impératif;
        Infinitif?: Infinitif;
        Participe?: Participe;
    }

