// useHangmanWord.js
import { useEffect, useState } from 'react';

const animales = [
    { word: 'elefante', hint: 'El mamífero terrestre más grande' },
    { word: 'jirafa', hint: 'Animal con el cuello más largo' },
    { word: 'tigre', hint: 'Felino salvaje con rayas' },
    { word: 'león', hint: 'Rey de la selva' },
    { word: 'delfín', hint: 'Mamífero marino conocido por su inteligencia' },
    { word: 'pingüino', hint: 'Ave que no puede volar y vive en climas fríos' },
    { word: 'canguro', hint: 'Animal que salta y lleva a sus crías en una bolsa' },
    { word: 'panda', hint: 'Mamífero en peligro de extinción que come bambú' },
    { word: 'rino', hint: 'Animal con un gran cuerno en la nariz' },
    { word: 'águila', hint: 'Ave de presa con gran visión' },
    { word: 'ballena', hint: 'El mamífero más grande del océano' },
    { word: 'oso', hint: 'Animal grande que hiberna en invierno' },
    { word: 'serpiente', hint: 'Reptil que se desliza en el suelo' },
    { word: 'lagarto', hint: 'Reptil de cuerpo alargado y piel escamosa' },
    { word: 'caballo', hint: 'Animal utilizado para montar y carreras' },
    { word: 'camello', hint: 'Animal que puede sobrevivir largos periodos sin agua' },
    { word: 'perro', hint: 'El mejor amigo del hombre' },
    { word: 'gato', hint: 'Animal doméstico conocido por su agilidad' },
    { word: 'loro', hint: 'Ave colorida capaz de imitar sonidos' },
    { word: 'puma', hint: 'Felino americano de color marrón claro' },
    { word: 'búfalo', hint: 'Animal grande que vive en manadas y tiene cuernos' },
    { word: 'foca', hint: 'Mamífero marino que vive en zonas frías' },
    { word: 'tortuga', hint: 'Reptil con un caparazón duro que se mueve lentamente' },
    { word: 'ratón', hint: 'Pequeño roedor que a menudo vive en casas' },
    { word: 'gaviota', hint: 'Ave que suele vivir cerca del mar y es conocida por su canto' },
    { word: 'cocodrilo', hint: 'Reptil peligroso que vive en ríos y pantanos' },
    { word: 'hipopótamo', hint: 'Animal semiacuático muy pesado que vive en África' },
    { word: 'ciervo', hint: 'Animal de grandes cuernos que habita en bosques' },
    { word: 'zorro', hint: 'Animal astuto y pequeño de color rojizo' },
    { word: 'abeja', hint: 'Insecto que produce miel' },
    { word: 'mariposa', hint: 'Insecto con alas de colores brillantes' },
    { word: 'ornitorrinco', hint: 'Animal único de Australia, mezcla de varios animales' },
    { word: 'lobo', hint: 'Ancestro salvaje del perro doméstico' },
    { word: 'jirafa', hint: 'Animal con el cuello más largo' },
    { word: 'burro', hint: 'Animal utilizado para transportar cargas pesadas' },
    { word: 'ardilla', hint: 'Pequeño roedor que vive en los árboles y come nueces' },
    { word: 'golondrina', hint: 'Ave migratoria conocida por su vuelo rápido y ágil' },
    { word: 'búho', hint: 'Ave nocturna conocida por su sabiduría' },
    { word: 'jirafa', hint: 'Animal con el cuello más largo' },
    { word: 'gacela', hint: 'Animal ágil y rápido que vive en las sabanas' },
    { word: 'búho', hint: 'Ave nocturna que simboliza sabiduría' },
    { word: 'gato montés', hint: 'Felino pequeño que vive en montañas y bosques' },
    { word: 'zebra', hint: 'Animal africano con rayas blancas y negras' },
    { word: 'ciervo', hint: 'Mamífero de gran cornamenta que vive en bosques' },
    { word: 'águila', hint: 'Ave de presa de gran envergadura' },
    { word: 'mono', hint: 'Animal ágil y juguetón que vive en la selva' },
    { word: 'pato', hint: 'Ave acuática que vive en lagos y ríos' },
    { word: 'paloma', hint: 'Ave que simboliza la paz' },
    { word: 'hormiga', hint: 'Insecto trabajador que vive en colonias' },
    { word: 'escorpión', hint: 'Arácnido venenoso con un aguijón en la cola' },
    { word: 'jaguar', hint: 'Felino salvaje de América Central y del Sur' },
    { word: 'hurón', hint: 'Mamífero pequeño y alargado, usado para cazar conejos' },
    { word: 'pingüino', hint: 'Ave que no puede volar y vive en climas fríos' },
    { word: 'oso polar', hint: 'Oso blanco que vive en el Ártico' },
    { word: 'lechuza', hint: 'Ave nocturna similar al búho' },
    { word: 'flamenco', hint: 'Ave de largas patas y plumaje rosado' },
    { word: 'leopardo', hint: 'Felino salvaje con manchas en el pelaje' },
    { word: 'rinoceronte', hint: 'Animal grande con un cuerno en la nariz' },
    { word: 'camaleón', hint: 'Reptil capaz de cambiar de color' },
    { word: 'lince', hint: 'Felino salvaje que vive en zonas montañosas' },
    { word: 'cabra', hint: 'Animal conocido por su capacidad de trepar rocas' },
    { word: 'ganso', hint: 'Ave acuática grande que suele migrar en bandadas' },
    { word: 'bisonte', hint: 'Animal grande que habita en las praderas norteamericanas' },
    { word: 'hiena', hint: 'Animal carroñero famoso por su risa' },
    { word: 'dromedario', hint: 'Animal desértico con una sola joroba' },
    { word: 'águila', hint: 'Ave rapaz de gran tamaño y vista aguda' },
    // Aquí puedes continuar añadiendo más animales hasta llegar a las 1000 palabras
    // { word: 'nombre_del_animal', hint: 'Descripción o pista del animal' }
  ];
const paises = [
    { word: 'argentina', hint: 'País famoso por el tango y el fútbol' },
    { word: 'brasil', hint: 'El país más grande de América del Sur' },
    { word: 'canadá', hint: 'País conocido por sus vastos paisajes y el jarabe de arce' },
    { word: 'china', hint: 'El país más poblado del mundo' },
    { word: 'india', hint: 'El segundo país más poblado y famoso por el Taj Mahal' },
    { word: 'australia', hint: 'País y continente conocido por canguros y koalas' },
    { word: 'méxico', hint: 'País famoso por los mariachis y el Día de los Muertos' },
    { word: 'japón', hint: 'País insular conocido por su cultura samurái y tecnología avanzada' },
    { word: 'españa', hint: 'País europeo famoso por el flamenco y las corridas de toros' },
    { word: 'italia', hint: 'País famoso por su comida, como la pasta y la pizza' },
    { word: 'alemania', hint: 'País europeo conocido por su Oktoberfest y autos de lujo' },
    { word: 'francia', hint: 'País famoso por la Torre Eiffel y su gastronomía' },
    { word: 'inglaterra', hint: 'País del Reino Unido conocido por su monarquía y el Big Ben' },
    { word: 'rusia', hint: 'El país más grande del mundo por superficie' },
    { word: 'egipto', hint: 'País famoso por sus pirámides y faraones' },
    { word: 'sudáfrica', hint: 'País conocido por su biodiversidad y Nelson Mandela' },
    { word: 'colombia', hint: 'País famoso por su café y biodiversidad' },
    { word: 'chile', hint: 'País largo y estrecho que se extiende por la costa de Sudamérica' },
    { word: 'perú', hint: 'País conocido por Machu Picchu y su historia inca' },
    { word: 'venezuela', hint: 'País con grandes reservas de petróleo y el Salto Ángel' },
    { word: 'argelia', hint: 'País más grande de África por superficie' },
    { word: 'nigeria', hint: 'País más poblado de África' },
    { word: 'kenia', hint: 'País africano famoso por sus safaris y fauna salvaje' },
    { word: 'indonesia', hint: 'País insular en el sudeste asiático con miles de islas' },
    { word: 'filipinas', hint: 'País insular en el sudeste asiático con influencias españolas' },
    { word: 'corea del sur', hint: 'País conocido por el K-pop y su tecnología avanzada' },
    { word: 'corea del norte', hint: 'País con un régimen político hermético y aislado' },
    { word: 'tailandia', hint: 'País del sudeste asiático famoso por sus templos budistas' },
    { word: 'vietnam', hint: 'País del sudeste asiático conocido por la Guerra de Vietnam' },
    { word: 'malasia', hint: 'País del sudeste asiático con una mezcla cultural única' },
    { word: 'singapur', hint: 'Ciudad-estado famosa por su modernidad y rascacielos' },
    { word: 'siria', hint: 'País en conflicto, conocido por su rica historia' },
    { word: 'turquía', hint: 'País que conecta Europa y Asia, famoso por Estambul' },
    { word: 'irán', hint: 'País con una historia milenaria y rico en petróleo' },
    { word: 'irak', hint: 'País en Medio Oriente con una rica historia antigua' },
    { word: 'afganistán', hint: 'País montañoso en Asia Central con una historia turbulenta' },
    { word: 'pakistán', hint: 'País del sur de Asia, vecino de India' },
    { word: 'bangladesh', hint: 'País del sur de Asia con una alta densidad de población' },
    { word: 'nepal', hint: 'País donde se encuentra el Monte Everest' },
    { word: 'bhután', hint: 'País pequeño en el Himalaya, conocido por su "Felicidad Nacional Bruta"' },
    { word: 'arabia saudita', hint: 'País en Medio Oriente rico en petróleo y cuna del Islam' },
    { word: 'emiratos árabes unidos', hint: 'Federación de monarquías conocida por Dubái' },
    { word: 'qatar', hint: 'Pequeño país del Golfo Pérsico, sede del Mundial 2022' },
    { word: 'israel', hint: 'País en Medio Oriente con gran importancia religiosa' },
    { word: 'jordania', hint: 'País en Medio Oriente, hogar de la antigua ciudad de Petra' },
    { word: 'líbano', hint: 'Pequeño país en Medio Oriente con rica cultura' },
    { word: 'chipre', hint: 'Isla mediterránea con una rica historia' },
    { word: 'sri lanka', hint: 'Isla-nación en el océano Índico, conocida por su té' },
    { word: 'maldivas', hint: 'Islas tropicales en el océano Índico, conocidas por sus resorts' },
    { word: 'madagascar', hint: 'Isla africana famosa por su biodiversidad única' },
    { word: 'mozambique', hint: 'País en África austral con una larga costa en el océano Índico' },
    { word: 'angola', hint: 'País en África austral rico en recursos naturales' },
    { word: 'zambia', hint: 'País africano conocido por las Cataratas Victoria' },
    { word: 'zimbabue', hint: 'País en África austral conocido también por las Cataratas Victoria' },
    { word: 'botsuana', hint: 'País africano conocido por sus safaris y parques naturales' },
    { word: 'namibia', hint: 'País africano famoso por el desierto de Namib' },
    { word: 'suazilandia', hint: 'Pequeño país del sur de África, también conocido como Esuatini' },
    { word: 'lesoto', hint: 'Pequeño país montañoso enclavado dentro de Sudáfrica' },
    { word: 'somalia', hint: 'País africano en el Cuerno de África, conocido por sus piratas' },
    { word: 'etiopía', hint: 'País africano con una historia milenaria' },
    { word: 'yemen', hint: 'País en la península arábiga, conocido por su arquitectura' },
    { word: 'omán', hint: 'País en la península arábiga con una rica cultura marítima' },
    { word: 'kuwait', hint: 'Pequeño país en el Golfo Pérsico, rico en petróleo' },
    { word: 'bahréin', hint: 'Pequeño reino insular en el Golfo Pérsico' },
    { word: 'afganistán', hint: 'País en Asia Central, con una historia marcada por conflictos' },
    { word: 'mongolia', hint: 'País con vastas estepas y una rica historia nómada' },
    { word: 'kazajistán', hint: 'El país más grande de Asia Central' },
    { word: 'uzbekistán', hint: 'País de Asia Central, famoso por la Ruta de la Seda' },
    { word: 'kirguistán', hint: 'País montañoso en Asia Central' },
    { word: 'tayikistán', hint: 'País montañoso de Asia Central, con una fuerte influencia soviética' },
    { word: 'turkmenistán', hint: 'País de Asia Central, conocido por sus desiertos' },
    { word: 'georgia', hint: 'País en la frontera entre Europa y Asia, conocido por su vino' },
    { word: 'armenia', hint: 'País montañoso en el Cáucaso, con una historia rica' },
    { word: 'azerbaiyán', hint: 'País en el Cáucaso, conocido por su riqueza petrolera' },
    { word: 'ucrania', hint: 'País en Europa del Este, conocido por sus campos de trigo' },
    { word: 'bielorrusia', hint: 'País en Europa del Este, con una estrecha relación con Rusia' },
    { word: 'polonia', hint: 'País europeo conocido por su historia en la Segunda Guerra Mundial' },
    { word: 'suecia', hint: 'País escandinavo famoso por su diseño y avances sociales' },
    { word: 'noruega', hint: 'País escandinavo conocido por sus fiordos' },
    { word: 'dinamarca', hint: 'País escandinavo famoso por sus cuentos de hadas y calidad de vida' },
    { word: 'finlandia', hint: 'País nórdico, famoso por sus saunas y auroras boreales' },
    { word: 'islandia', hint: 'País insular nórdico famoso por sus volcanes y geiseres' },
    // Continúa agregando más países con sus descripciones
  ];
const deportes = [
    { word: 'fútbol', hint: 'Deporte más popular del mundo, se juega con una pelota y dos equipos' },
    { word: 'baloncesto', hint: 'Deporte de cancha en el que se encestan balones en una canasta' },
    { word: 'tenis', hint: 'Deporte en el que se golpea una pelota con una raqueta sobre una red' },
    { word: 'voleibol', hint: 'Deporte de cancha con seis jugadores que pasan una pelota sobre una red' },
    { word: 'natación', hint: 'Deporte acuático que consiste en recorrer una distancia en el agua' },
    { word: 'atletismo', hint: 'Deporte que incluye correr, saltar y lanzar en una pista o campo' },
    { word: 'béisbol', hint: 'Deporte en el que se golpea una pelota con un bate para anotar carreras' },
    { word: 'rugby', hint: 'Deporte de contacto en el que se lleva una pelota ovalada hacia una zona de anotación' },
    { word: 'boxeo', hint: 'Deporte de combate en el que se usan guantes y se golpea al oponente' },
    { word: 'gimnasia', hint: 'Deporte que incluye ejercicios de flexibilidad, fuerza y control corporal' },
    { word: 'hockey', hint: 'Deporte de equipo en el que se usan palos para golpear una pelota o disco' },
    { word: 'ciclismo', hint: 'Deporte que se practica sobre una bicicleta, puede ser en carretera o montaña' },
    { word: 'esquí', hint: 'Deporte que se practica en la nieve deslizándose con tablas largas' },
    { word: 'snowboard', hint: 'Deporte que se practica en la nieve con una sola tabla' },
    { word: 'esgrima', hint: 'Deporte de combate en el que se usan espadas para tocar al oponente' },
    { word: 'karate', hint: 'Deporte de artes marciales que incluye golpes y patadas' },
    { word: 'judo', hint: 'Deporte de combate que se centra en lanzamientos y llaves' },
    { word: 'taekwondo', hint: 'Arte marcial coreano que se centra en patadas y golpes rápidos' },
    { word: 'golf', hint: 'Deporte en el que se golpea una pequeña bola para introducirla en hoyos' },
    { word: 'surf', hint: 'Deporte que se practica sobre una tabla deslizándose en las olas' },
    { word: 'remo', hint: 'Deporte en el que se usan remos para mover una embarcación' },
    { word: 'triatlón', hint: 'Deporte que combina natación, ciclismo y carrera' },
    { word: 'motociclismo', hint: 'Deporte que se practica sobre motocicletas en diferentes pistas' },
    { word: 'automovilismo', hint: 'Deporte que se practica en autos de carreras en circuitos' },
    { word: 'parapente', hint: 'Deporte que consiste en volar con un parapente' },
    { word: 'bádminton', hint: 'Deporte similar al tenis, pero se juega con una raqueta y un volante' },
    { word: 'skateboard', hint: 'Deporte que se practica sobre una tabla con ruedas haciendo trucos' },
    { word: 'senderismo', hint: 'Actividad física que consiste en caminar por rutas naturales' },
    { word: 'alpinismo', hint: 'Deporte que consiste en escalar montañas' },
    { word: 'patinaje', hint: 'Deporte que se practica sobre hielo o superficies duras con patines' },
    { word: 'balonmano', hint: 'Deporte de equipo en el que se lanza una pelota con la mano' },
    { word: 'polo', hint: 'Deporte de equipo que se juega a caballo, golpeando una pelota con mazos' },
    { word: 'lucha libre', hint: 'Deporte de combate con reglas acrobáticas y de show' },
    { word: 'sumo', hint: 'Deporte de combate japonés en el que se gana sacando al oponente del ring' },
    { word: 'críquet', hint: 'Deporte de bate y pelota que se juega principalmente en Inglaterra y países de la Commonwealth' },
    { word: 'pesca', hint: 'Deporte que consiste en capturar peces' },
    { word: 'paracaidismo', hint: 'Deporte que consiste en lanzarse desde una aeronave con un paracaídas' },
    { word: 'tiro con arco', hint: 'Deporte que consiste en disparar flechas con un arco' },
    { word: 'pádel', hint: 'Deporte similar al tenis pero en un espacio más reducido y con paredes' },
    { word: 'kárate', hint: 'Arte marcial que se enfoca en golpes, patadas y defensa personal' },
    { word: 'kickboxing', hint: 'Deporte de combate que combina golpes de boxeo con patadas' },
    { word: 'paintball', hint: 'Deporte en el que se dispara pintura a los oponentes para eliminarlos' },
    { word: 'lacrosse', hint: 'Deporte de equipo en el que se usa una red para lanzar una pelota' },
    { word: 'billar', hint: 'Deporte que se juega en una mesa golpeando bolas con un taco' },
    { word: 'softbol', hint: 'Deporte similar al béisbol pero con una bola más grande' },
    { word: 'waterpolo', hint: 'Deporte de equipo que se juega en una piscina con una pelota' },
    { word: 'parkour', hint: 'Deporte urbano que consiste en moverse sobre obstáculos con agilidad' },
    { word: 'halterofilia', hint: 'Deporte que consiste en levantar pesas' },
    { word: 'deportes electrónicos', hint: 'Competencias de videojuegos organizadas de forma profesional' },
    { word: 'futbol americano', hint: 'Deporte de contacto con un balón ovalado y dos equipos' },
    { word: 'beisbol', hint: 'Deporte en el que se golpea una pelota con un bate y se recorren bases' },
    { word: 'rally', hint: 'Competencia de automovilismo que se realiza en diferentes tipos de terreno' },
    { word: 'canoa', hint: 'Deporte acuático en el que se usa una embarcación estrecha para remar' },
    { word: 'kajak', hint: 'Deporte acuático similar al canotaje pero con una embarcación más pequeña' },
    { word: 'crossfit', hint: 'Deporte que combina entrenamiento funcional y ejercicios de alta intensidad' },
    { word: 'muay thai', hint: 'Arte marcial tailandés que combina golpes, patadas y rodillazos' },
    { word: 'kung fu', hint: 'Arte marcial chino que se enfoca en la defensa personal y equilibrio' },
    { word: 'equitación', hint: 'Deporte que consiste en montar a caballo y realizar saltos y maniobras' },
    { word: 'hipismo', hint: 'Deporte relacionado con la carrera de caballos' },
    { word: 'trineo', hint: 'Deporte que se practica deslizándose en la nieve sobre un trineo' },
    { word: 'curling', hint: 'Deporte de equipo en el que se deslizan piedras sobre una pista de hielo' },
    { word: 'rugby seven', hint: 'Variante del rugby con equipos de siete jugadores en lugar de quince' },
    { word: 'polo acuático', hint: 'Variante del polo que se juega en una piscina' },
    { word: 'bobsleigh', hint: 'Deporte de invierno en el que un equipo desciende por una pista de hielo en un trineo' },
    { word: 'escalada', hint: 'Deporte que consiste en subir por paredes o montañas' },
    { word: 'kitesurf', hint: 'Deporte acuático en el que se usa una cometa para deslizarse sobre el agua' },
    { word: 'rafting', hint: 'Deporte acuático que consiste en descender ríos en una balsa' },
    { word: 'windsurf', hint: 'Deporte acuático que combina surf y vela' },
    { word: 'yoga', hint: 'Disciplina que combina ejercicio físico y meditación' },
    { word: 'crossfit', hint: 'Entrenamiento de alta intensidad y ejercicios funcionales' },
    { word: 'triatlón', hint: 'Deporte que combina natación, ciclismo y carrera' },
    { word: 'freestyle', hint: 'Variante de varios deportes en la que se hacen maniobras acrobáticas' },
    { word: 'bmx', hint: 'Deporte que se practica con bicicletas en pistas o haciendo acrobacias' },
    { word: 'parkour', hint: 'Deporte urbano de superación de obstáculos' },
    // Continúa agregando más deportes hasta llegar a 1000
  ];
const thematic = {
    ANIMALES:"ANIMALES",
    PAISES:"PAISES",
    DEPORTES:"DEPORTES"
}
  

function useHangmanWord(init="") {
  const [wordData, setWordData] = useState({ word: '', hint: '' });
  const [thematicSelected,setThematicSelected] = useState("")

  const generateRandomWord = (thematicSelected="") => {
    setThematicSelected(thematicSelected)
    let words = []
    switch (thematicSelected) {
        case thematic.ANIMALES:
            words = animales
            break;
        case thematic.DEPORTES:
            words = deportes 
            break;
         case thematic.PAISES:
            words = paises
            break;
    
        default:
            words = [...animales,...paises,...deportes]
            break;
    }
    const randomIndex = Math.floor(Math.random() * words.length);
    const selectedWord = words[randomIndex];
    setWordData(selectedWord);
  };

  return {thematic,thematicSelected, word: wordData.word, hint: wordData.hint, generateRandomWord };
}

export default useHangmanWord;
