let citas = [
    {
        'autor':'Jesucristo',
        'texto':'Nos hartamos de andar por sendas de iniquidad y perdición, atravesamos desiertos intransitables.'
    },
    {
        'autor':'Khalil Gibran ',
        'texto':'La más bella palabra en labios de un hombre es la palabra madre, y la llamada más dulce: madre mía.'
    },
    {
        'autor':'Jesucristo',
        'texto':'Por sus frutos los conoceréis.'
    },
    {
        'autor':'Jesucristo',
        'texto':'Porque viendo no ven, y oyendo no oyen, ni entienden.'
    },
    {
        'autor':'Jesucristo',
        'texto':'No juzguéis a los demás si no queréis ser juzgados. Porque con el mismo juicio que juzgareis habéis de ser juzgados, y con la misma medida que midiereis, seréis medidos vosotros.'
    },
    {
        'autor':'Jesucristo',
        'texto':'El que esté libre de pecado, que tire la primera piedra.'
    },
    {
        'autor':'Steve Jobs',
        'texto':'Ser el más rico del cementerio no es lo que me importa. Acostarme por la noche y pensar que he hecho algo genial. Eso es lo que más me importa.'
    },
    {
        'autor':'Honoré de Balzac',
        'texto':'Jamás en la vida encontraréis ternura mejor y más desinteresada que la de vuestra madre.'
    },
    {
        'autor':'Steve Jobs',
        'texto':'A veces la vida te pegará en la cabeza con un ladrillo. Pero no pierdas la fe.'
    },
    {
        'autor':'Alfred de Musset',
        'texto':'Quien quiere a su madre no puede ser malo.'
    },
    {
        'autor':'Steve Jobs',
        'texto':'Tu tiempo es limitado, de modo que no lo malgastes viviendo la vida de alguien distinto.'
    },
    {
        'autor':'Mahatma Gandhi',
        'texto':'La violencia es el miedo a los ideales de los demás.'
    },
    {
        'autor':'Aristóteles',
        'texto':'El ignorante afirma, el sabio duda y reflexiona.'
    },
    {
        'autor':'Aristóteles',
        'texto':'Considero más valiente al que conquista sus deseos que al que conquista a sus enemigos, ya que la victoria más dura es la victoria sobre uno mismo.'
    },
    {
        'autor':'Aristóteles',
        'texto':'El sabio no dice todo lo que piensa, pero siempre piensa todo lo que dice.'
    },
    {
        'autor':'Mahatma Gandhi',
        'texto':'Nuestra recompensa se encuentra en el esfuerzo y no en el resultado. Un esfuerzo total es una victoria completa.'
    },
    {
        'autor':'Aristóteles',
        'texto':'La esperanza es el sueño del hombre despierto.'
    },
    {
        'autor':'Abraham Lincoln',
        'texto':'Todo lo que soy o espero ser se lo debo a la angelical solicitud de mi madre.'
    },
    {
        'autor':'Aristóteles',
        'texto':'La amistad es un alma que habita en dos cuerpos; un corazón que habita en dos almas.'
    },
    {
        'autor':'Honoré de Balzac',
        'texto':'El corazón de una madre es un abismo en el fondo del cual siempre hay un perdón.'
    },
    {
        'autor':'Mahatma Gandhi',
        'texto':'No hay camino para la paz, la paz es el camino.'
    },
    {
        'autor':'Pablo Neruda',
        'texto':'Conocer el amor de los que amamos es el fuego que alimenta la vida.'
    },
    {
        'autor':'Mahatma Gandhi',
        'texto':'Nadie puede hacer el bien en un espacio de su vida, mientras hace daño en otro. La vida es un todo indivisible'
    },
    {
        'autor':'Platón',
        'texto':'La mayor declaración de amor es la que no se hace; el hombre que siente mucho, habla poco.'
    },
    {
        'autor':'Mahatma Gandhi',
        'texto':'Casi todo lo que realice será insignificante, pero es muy importante que lo haga'
    },
    {
        'autor':'Mahatma Gandhi',
        'texto':'Ojo por ojo y todo el mundo acabará ciego.'
    },
    {
        'autor':'Mahatma Gandhi',
        'texto':'No dejes que se muera el sol sin que hayan muerto tus rencores.'
    },
    {
        'autor':'Anónimo',
        'texto':'No existe el amor, sino las pruebas de amor, y la prueba de amor a aquel que amamos es dejarlo vivir libremente.'
    },
    {
        'autor':'Mahatma Gandhi',
        'texto':'Cuando todos te abandonan, Dios se queda contigo.'
    },
    {
        'autor':'Gregorio Marañón',
        'texto':'No sabrás todo lo que valgo hasta que no pueda ser junto a ti todo lo que soy.'
    },
    {
        'autor':'Mahatma Gandhi',
        'texto':'No escuches a los amigos cuando el amigo interior dice: ¡Haz esto!'
    },
    {
        'autor':'Aristóteles',
        'texto':'Lo que con mucho trabajo se adquiere, más se ama.'
    },
    {
        'autor':'Antonio Gala',
        'texto':'El amor es una amistad con momentos eróticos.'
    },
    {
        'autor':'Aristóteles',
        'texto':'Un amigo fiel es un alma en dos cuerpos.'
    },
    {
        'autor':'Madre Teresa de Calcuta',
        'texto':'El amor, para que sea auténtico, debe costarnos.'
    },
    {
        'autor':'Aristóteles',
        'texto':'Algunos creen que para ser amigos basta con querer, como si para estar sano bastara con desear la salud.'
    },
    {
        'autor':'William Shakespeare',
        'texto':'El amor consuela como el resplandor del sol después de la lluvia.'
    },
    {
        'autor':'Steve Jobs',
        'texto':'Lo que se obtiene con violencia, solamente se puede mantener con violencia.'
    },
    {
        'autor':'Aristóteles',
        'texto':'No se puede ser y no ser algo al mismo tiempo y bajo el mismo aspecto.'
    },
    {
        'autor':'Pablo Neruda',
        'texto':'Es tan corto el amor y tan largo el olvido.'
    },
    {
        'autor':'Jesucristo',
        'texto':'El mal no es lo que entra en la boca del hombre, sino lo que sale de ella.'
    },
    {
        'autor':'Juan Pablo II',
        'texto':'La familia está llamada a ser templo, o sea, casa de oración: una oración sencilla, llena de esfuerzo y ternura. Una oración que se hace vida, para que toda la vida se convierta en oración.'
    },
    {
        'autor':'Juan Pablo II',
        'texto':'Por eso América: si quieres la paz, trabaja por la justicia. Si quieres la justicia defiende la vida. Si quieres la vida, abraza la verdad, la verdad revelada por Dios.'
    },
    {
        'autor':'Juan Pablo II',
        'texto':'La familia es base de la sociedad y el lugar donde las personas aprenden por vez primera los valores que les guían durante toda su vida.'
    },
    {
        'autor':'Steve Jobs',
        'texto':'A veces, cuando se innova, se cometen errores. Es mejor admitirlos rápidamente, y seguir adelante con la mejora de tus otras innovaciones.'
    },
    {
        'autor':'Steve Jobs',
        'texto':'Cada día me miro en el espejo y me pregunto: "Si hoy fuese el último día de mi vida, ¿querría hacer lo que voy a hacer hoy?". Si la respuesta es "No" durante demasiados días seguidos, sé que necesito cambiar algo'
    },
    {
        'autor':'Dalai Lama',
        'texto':'La amistad sólo podía tener lugar a través del desarrollo del respeto mutuo y dentro de un espíritu de sinceridad.'
    },
    {
        'autor':'Steve Jobs',
        'texto':'La creatividad es simplemente conectar cosas.'
    },
    {
        'autor':'Steve Jobs',
        'texto':'Un ordenador es para mí la herramienta más sorprendente que hayamos ideado. Es el equivalente a una bicicleta para nuestras mentes.'
    },
    {
        'autor':'Dalai Lama',
        'texto':'El mantenimiento de la paz comienza con la autosatisfacción de cada individuo.'
    },
    {
        'autor':'Steve Jobs',
        'texto':'Estoy convencido de que la mitad de lo que separa a los emprendedores exitosos de los no exitosos es la perseverancia.'
    },
    {
        'autor':'Dalai Lama',
        'texto':'Si deseas felicidad de los demás, sé compasivo. Si deseas tu propia felicidad, sé compasivo.'
    },
    {
        'autor':'Gabriel García Márquez ',
        'texto':'La peor forma de extrañar a alguien es estar sentado a su lado y saber que nunca lo podrás tener.'
    },
    {
        'autor':'Juan Pablo II',
        'texto':'Amar es lo contrario de utilizar.'
    },
    {
        'autor':'Michael Jordan',
        'texto':'He fallado una y otra vez en mi vida, por eso he conseguido el éxito.'
    },
    {
        'autor':'Juan Pablo II',
        'texto':'Que nadie se haga ilusiones de que la simple ausencia de guerra, aun siendo tan deseada, sea sinónimo de una paz verdadera. No hay verdadera paz sino viene acompañada de equidad , verdad, justicia, y solidaridad.'
    },
    {
        'autor':'Albert Einstein',
        'texto':'Al principio todos los pensamientos pertenecen al amor. Después, todo el amor pertenece a los pensamientos.'
    },
    {
        'autor':'Platón',
        'texto':'La pobreza no viene por la disminución de las riquezas, sino por la multiplicación de los deseos.'
    },
    {
        'autor':'Jean Paul',
        'texto':'El recuerdo es el único paraíso del cual no podemos ser expulsados.'
    },
    {
        'autor':'Roger Martin du Gard ',
        'texto':'La vida sería imposible si todo se recordase. El secreto está en saber elegir lo que debe olvidarse.'
    },
    {
        'autor':'Anónimo',
        'texto':'La humildad y la nobleza son virtudes muy lindas en el humano, que de saber serlo, Dios lo recompensara de una manera grandiosa y núnca será olvidado.'
    }
];