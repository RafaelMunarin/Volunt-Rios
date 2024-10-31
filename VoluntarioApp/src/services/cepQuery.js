export const cepQuery = async (cep) => {
    // Verifica se o CEP contém apenas números e se tem 8 caracteres
    const cepRegex = /^\d{8}$/;

    if (!cepRegex.test(cep)) {
        return { success: false, message: "Por favor, insira um CEP válido (apenas números e 8 dígitos)." };
    }

    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        if (!response.ok) {
            return { success: false, message: "Erro ao acessar a API. Tente novamente mais tarde." };
        }

        const data = await response.json();

        if (data.erro) {
            return { success: false, message: "CEP não encontrado." };
        } else {
            return { success: true, ...data };
        }
    } catch (error) {
        console.error('Erro ao consultar CEP:', error);
        return { success: false, message: "Ocorreu um erro ao consultar o CEP. Verifique sua conexão com a internet." };
    }
};
