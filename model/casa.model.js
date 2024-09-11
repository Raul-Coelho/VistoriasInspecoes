export class Casa {
    constructor(id, cliente, data, localizacao, classificacao, idadeRealEdificacao, area, identificacao, equipamentos, quantidadeComodos, vistaEmLoco, vistaMaps) {
        this.id = id;
        this.cliente = cliente;
        this.data = data;
        this.localizacao = localizacao;
        this.classificacao = classificacao;
        this.idadeRealEdificacao = idadeRealEdificacao;
        this.area = area;
        this.identificacao = identificacao;
        this.equipamentos = equipamentos;
        this.quantidadeComodos = quantidadeComodos;
        this.vistaEmLoco = vistaEmLoco;
        this.vistaMaps = vistaMaps;
    }
}