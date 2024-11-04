//Reducers Search Bar

import {
  GET_USER_ID,
  GET_ALL_PROD,
  SEARCH_BY_NAME,
  GET_DETAIL,
  CLEAN_DETAIL,
  GET_ALL_CATEGORIES,
  CHANGE_PAGE,
  SET_PRICE_RANGE,
  SET_SORT,
  SET_FILTER_CATEGORY,
  SET_NUMBERS_PAGINATED,
  RESET_FILTERS,
  SET_FILTER_PRICE,
  SET_NAME_FILTER,
  DISABLED_PRODUCTS,
  GET_ALL_USERS,
  DISABLE_USER,
  FILTER_BY_CATEGORIA,
} from "../redux/actions";


const initialState = {
  //
  userID: {},
  idUsuarioActual: {},
  //
  items: [],
  
  shopuser: [],

  sortBy: "",
  numbersPaginated: [],
  categoryFilter: "",
  
  nameFilter: "",
  currentPage: 1,
  itemsPerPage: 12,

  detail: [],
  filter: {
    type: "",
  },
  sort: {
    ascPrice: false,
    descPrice: false,
    ascName: false,
    descName: false,
  },
  filtered: [],
  priceRange: {
    min: 0,
    max: 0,
  },
  sorted: [],
  categories: [],


  currentItems: [],
  loading: false,

  // FORMULARIO
  products: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    //
    case GET_USER_ID:
      return {
        ...state,
        userID: action.payload,
      };
    //
    case SET_NAME_FILTER:
      return {
        ...state,
        nameFilter: action.payload,
      };
    case SET_FILTER_PRICE:
      return {
        ...state,
        filterBy: action.payload,
      };
    case RESET_FILTERS:
      return {
        ...state,
        sortBy: "",
        filter: {
          type: "",
        },
      };
    case SET_SORT:
      return {
        ...state,
        sortBy: action.payload,
      };
    case SET_PRICE_RANGE:
      return {
        ...state,
        priceRange: action.payload,
      };
    case SET_FILTER_CATEGORY:
      return {
        ...state,
        categoryFilter: action.payload,
      };


   

    case SET_NUMBERS_PAGINATED:
      return {
        ...state,
        numbersPaginated: action.payload,
      };

    case GET_ALL_PROD:
      return {
        ...state,
        items: action.payload,
      };
    case CHANGE_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
  

    case GET_ALL_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };



   

    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };
    case GET_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
    case CLEAN_DETAIL:
      return {
        ...state,
        detail: [],
      };
    // work here
    case "ADD_TO_CART":
      // Comprobamos si el producto ya existe en el carrito
      const existingProduct = state.items.find(
        (item) => item.id === action.product.id
      );
      if (existingProduct) {
        // Si existe, aumentamos su cantidad
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      // Si el producto no existe en el carrito, lo añadimos con cantidad 1
      return {
        ...state,
        items: [...state.items, { ...action.product, quantity: 1 }],
      };
    case "CLEAR_CART":
      return {
        ...state,
        items: [],
      };
    case "INCREASE_QUANTITY":
      // Aumentamos la cantidad del producto seleccionado
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case "DECREASE_QUANTITY":
      // Disminuimos la cantidad del producto seleccionado
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };

    // FORMULARIO

    case "POST_PRODUCTS":
      return {
        ...state,
      };
    case "ADD_REVIEW":
      return {
        ...state,
      };
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };

    
    
    case "ID_USER":
      return {
        ...state,
        idUsuarioActual: action.payload,
      };
    case "SHOP_USER":
      return {
        ...state,
        shopuser: action.payload,
      };
   
    case "POST_SHOP":
      return {
        ...state,
      };
    case DISABLED_PRODUCTS:
      let auxProduct = state.items.find((prod) => prod.id === action.payload);

      var foundIndex = state.items.findIndex((x) => x.id == action.payload);

      let auxItems = state.items;

      // auxItems[foundIndex] = {...auxProduct, isActive: auxProduct.isActive ? false : true}
      auxProduct.isActive
        ? (auxProduct.isActive = false)
        : (auxProduct.isActive = true);

      auxItems[foundIndex] = auxProduct;

      return {
        ...state,
        items: auxItems,
      };

    case GET_ALL_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case DISABLE_USER:
      return {
        ...state,
      };
    case FILTER_BY_CATEGORIA:
      return {
        ...state,
        filterjuegos: action.payload,
        currentPage: 1,
      };
   
    default:
      return state;
  }
}

//Reducers Search Bar
