# twitch-youtube-to-s3

Este utilitário em Node.js é projetado para baixar VODs do Twitch e vídeos do YouTube, e depois fazer o upload para um bucket AWS S3.

## Pré-requisitos

### Node.js
Certifique-se de que o Node.js está instalado em seu sistema. Se não, você pode baixá-lo [aqui](https://nodejs.org/).

### ACCESS KEY AWS
Você precisa de uma conta AWS com um bucket S3 configurado e as credenciais de acesso disponíveis.

### youtube-dl
O `youtube-dl` deve estar instalado em seu sistema para baixar vídeos.

## Instalação do youtube-dl

### Windows
Baixe o arquivo executável diretamente do [site oficial](https://yt-dl.org).

### MacOS
Você pode instalar o youtube-dl usando o Homebrew. Se você não tem o Homebrew instalado, você pode instalar usando o comando:
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
Depois de instalar o Homebrew, instale o youtube-dl com:
```
brew install youtube-dl
```

### Linux
A instalação pode ser feita através do gerenciador de pacotes. Por exemplo, no Ubuntu, você pode usar `apt`:
```
sudo apt-get install youtube-dl
```

## Configuração

1. **Clone o Repositório**
Clone este repositório para sua máquina local:
```
git clone <https://github.com/otaviomarcal/twitch-youtube-to-s3>
cd <twitch-youtube-to-s3>
```

2. **Instale as Dependências**
Use npm ou yarn para instalar as dependências do projeto:
```
npm install
```
ou
```
yarn
```

3. **Configure as Variáveis de Ambiente**
Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis com seus valores respectivos:
```
AWS_ACCESS_KEY_ID=seu-access-key-id
AWS_SECRET_ACCESS_KEY=seu-secret-access-key
AWS_REGION=sua-região
S3_BUCKET_NAME=nome-do-seu-bucket
```

4. **Adicione URLs dos Vídeos**
Adicione os URLs dos vídeos que deseja baixar e fazer o upload no array `linksArray` no arquivo `index.js`.

5. **Execute o Script**
```
node index.js
```

## Licença
Use como quiser! (= 
