AOS.init();

const dataDoEvento = new Date("Dec 28, 2024 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMS = 1000 * 60 * 60 * 24;
    const horaEmMS = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / (diaEmMS));
    const horasAteOEvento = Math.floor((distanciaAteOEvento % (diaEmMS)) / (horaEmMS));
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % (horaEmMS)) / minutoEmMs);
    const segundosAteOEvento =Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);


    document.getElementById('counter').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if(distanciaAteOEvento < 0){
        clearInterval(contaAsHoras);
        document.getElementById('counter').innerHTML = 'Evento expirado';
    }
}, 1000);