FROM amd64/node

WORKDIR /production

ADD src ./
RUN npm install

RUN wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | apt-key add - 
RUN echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list
RUN apt update 
RUN apt-get -y install google-chrome-stable
RUN apt-get -y install libxtst6
RUN node node_modules/puppeteer/install.mjs