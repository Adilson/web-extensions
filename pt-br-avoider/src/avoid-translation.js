console.log('ext loaded');
var rx = /^([^/]*\/\/[^/]+)\/pt-BR\/(.*)$/i;
console.log('location.href');
if (rx.test(location.href) && confirm('Deseja ir para o original'))
	location.href = location.href.replace(rx, "$1/en-US/$2")
