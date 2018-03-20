import _ from 'lodash'
import {get, set} from './localStorage'
export default {
    state: {
        cart: [],
        products: [
            {
                name: 'Стивен Кинг - Все предельно',
                id: 0,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas ligula massa, quis viverra mauris consectetur sed. Ut faucibus, sapien quis ullamcorper congue, ligula mi sollicitudin diam, aliquam semper ligula est vitae mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eleifend dolor ut.',
                img: 'https://ozon-st.cdn.ngenix.net/multimedia/1005842487.jpg',
                cost: 469
            },
            {
                name: 'Книга ужасов',
                id: 1,
                img: 'http://iknigi.net/books_files/covers/thumbs_300/kniga-uzhasov-sbornik-99705.jpg',
                cost: 399,
                description: 'Джон Стивенс, известный составитель хоррор-антологий, предлагает вашему вниманию великолепную коллекцию жутких историй. Необъяснимое, странное, леденящее кровь и пугающее до дрожи – все виды ужаса собраны под одной обложкой. Бессонные ночи и мечущееся в панике воображение – вот что ожидает тебя, отважный читатель.'
            },
            {
                name: 'Стивен Кинг - Мобильник',
                id: 2,
                img: 'https://cv7.litres.ru/sbc/22727570_cover-elektronnaya-kniga-stiven-king-mobilnik.jpg',
                cost: 563,
                description: 'Произведение Стивена Кинга «Мобильник» поднимает проблему, актуальную в современном мире. Несмотря на то, что она гиперболизирована, к ней добавлены фантастика и элементы ужаса, это только ещё больше влияет на её осознание. Писателя натолкнуло на мысль написать книгу такой тематики его наблюдение: он смотрел, как множество людей в повседневной жизни постоянно разговаривают по телефону. Как ярый противник зависимости от техники, он решил своим произведением показать читателям всю ширину охвата этой проблемы.'
            },
            {
                name: 'Стивен Кинг - 1408',
                id: 3,
                img: 'https://www.directmedia.ru/file/42/42ff7bb3c7159bed9228178bea3c6f77t6arh0e03h/39288_nmmva5ph.jpg',
                cost: 999,
                description: ''
            },
            {
                name: 'Стивен Кинг - Безнадега',
                id: 4,
                img: 'http://kinglib.net/uploads/posts/2014-10/thumbs/1412182573_stiven-king-beznadega1.jpg',
                cost: 673,
                description: 'Что такое «Безнадега»? Это не просто безысходность и одиночество, это еще и небольшой городок, в котором царят силы Зла, смерть подстерегает приезжих на каждом шагу, а человеческие страхи оживают. И все это благодаря неуемной фантазии Стивена Кинга, из-под легкой руки которого в 1996 году вышел роман с одноименным названием. Немного позже, в этом же году, Кингом под псевдонимом Ричард Бахман была выпущена книга «Регуляторы», которая имеет схожий сюжет, одинаковых героев, а действия этих двоих произведений являются взаимоисключающими. Поэтому можно сделать вывод, что события, описываемые в книгах, происходят в параллельных вселенных.'
            },
            {
                name: 'Стивен Кинг - Мизери',
                id: 5,
                img: 'https://j.livelib.ru/boocover/1001425286/200/c82d/Stiven_King__Mizeri.jpg',
                cost: 545,
                description: 'Может ли спасение от верной гибели обернуться таким кошмаром, что даже смерть покажется милосердным даром судьбы? Может. Ибо это произошло с Полом Шелдоном, автором бесконечного сериала книг о злоключениях Мизери. Раненый писатель оказался в руках Энни Уилкс - женщины, потерявшей рассудок на почве его романов.'
            },
            {
                name: 'Крестный Отец',
                id: 6,
                img: 'https://i.livelib.ru/boocover/1000210238/140x220/ce6b/Mario_Pyuzo__Krestnyj_otets.jpg',
                cost: 842,
                description: 'Роман "Крестный отец" принес своему создателю всемирную известность в 1969 году - задолго до того, как великий Фрэнсис Форд Коппола экранизировал этот бестселлер. "Гангстерская трилогия" была удостоена нескольких премий "Оскар".'
            }
        ]
    },
    getters: {
        cartLength (state) {
            let amount = 0
            _.forEach(state.cart, function (item) {
                amount += item.amount
            })
            return amount
        },
        cartCost (state) {
            let cost = 0
            if (!_.isEmpty(state.cart)) {
                _.forEach(state.cart, function (item) {
                    let product = _.find(state.products, product => product.id === item.id)
                    if (typeof product !== 'undefined') cost += product.cost * item.amount
                })
            }
            return cost
        }
    },
    mutations: {
        updateCart (state, {id, action, value}) {
            let inCart = _.find(state.cart, item => item.id === id)
            if (typeof inCart !== 'undefined') {
                let index = _.indexOf(state.cart, inCart)
                switch (action) {
                case 'add':
                    state.cart[index].amount++
                    break
                case 'change':
                    state.cart[index].amount = value
                    break
                case 'delete':
                    state.cart.splice(index, 1)
                }
            } else {
                switch (action) {
                case 'add':
                    state.cart.push({
                        id,
                        amount: 1
                    })
                    break
                case 'change':
                    state.cart.push({
                        id,
                        amount: value
                    })
                }
            }
            set('cart', state.cart)
        },
        clearCart (state) {
            state.cart = []
            set('cart', state.cart)
        },
        loadCart (state) {
            let cart = get('cart')
            if (!cart) cart = []
            state.cart = cart
        }
    }
}
