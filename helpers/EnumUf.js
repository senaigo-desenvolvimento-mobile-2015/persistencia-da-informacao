/*
 * Enum Município
 */
var Enum = require('enum');
var enumUf = new Enum({
            'AC': 'Acre',
            'AL': 'Alagoas',
            'AP': 'Amapá',
            'AM': 'Amazonas',
            'BA': 'Bahía',
            'CE': 'Ceará',
            'DF': 'Distrito Federal',
            'ES': 'Espírito Santo',
            'GO': 'Goiás',
            'MA': 'Maranhão',
            'MT': 'Mato Grosso',
            'MS': 'Mato Grosso do Sul',
            'MG': 'Minas Gerais',
            'PA': 'Pará',
            'PB': 'Paraíba',
            'PE': 'Pernambuco',
            'PR': 'Paraná',
            'PI': 'Piauí',
            'RJ': 'Rio De Janeiro',
            'RN': 'Rio Grande do Norte',
            'RS': 'Rio Grande do Sul',
            'RO': 'Rondônia',
            'RR': 'Roraima',
            'SC': 'Santa Catarina',
            'SE': 'Sergipe',
            'SP': 'São Paulo',
            'TO': 'Tocantins'
        });
enumUf.isFlaggable;
module.exports = enumUf;  