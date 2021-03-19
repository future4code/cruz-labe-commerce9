import React from 'react';
import styled from 'styled-components'

const ContainerCardProdutos = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: repeat(2, 3fr);
    grid-gap: 10px 10px;

`

const CardProdutos = styled.div`
    background-color:gray;
    height: 350px;
    width: 300px;
    padding-top:15%;
        
`

const PlanetaImg = styled.img `
    width: 150px;
    height:150px;

`

const ProdutosCard = () => {
      
    const produtosLista = [
            {
                id: 1,      
                name:  "Venus",
                value: 15000,      
                imageUrl: "https://www.zmescience.com/mrf4u/statics/i/ps/cdn.zmescience.com/wp-content/uploads/2016/08/600px-Venus_in_Real_Color_28Mosaic29.jpg?width=1200&enable=upscale",
                quantity: 0,
            },
            {
                id: 2,      
                name:  "Marte",
                value: 10000,      
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/1200px-OSIRIS_Mars_true_color.jpg",
                quantity: 0,
            },
            {
                id: 3,      
                name:  "Saturno",
                value: 5000,      
                imageUrl: "https://p2.trrsf.com/image/fget/cf/1200/1200/filters:quality(85)/images.terra.com/2020/10/16/saiba-como-o-ciclo-de-saturno-influencia-na-perspectiva-profissional-16094.jpg",
                quantity: 0,
            },
            {
                id: 4,      
                name:  "Jupiter",
                value: 135000,      
                imageUrl: "https://s2.glbimg.com/34AekqqbXdAFCWAuG0g34I6d0Nw=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/B/w/tNqMxeRvWvSvLbHuChkA/jupiter01.jpg",
                quantity: 0,
            },
            {
                id: 5,      
                name:  "Asgard",
                value: 95500,      
                imageUrl: "https://fastly.4sqi.net/img/general/200x200/14230145_7d_kRyBPk1F4jYm4tiVGLHR66Yn7WoHctHd53HIuRpo.jpg",
                quantity: 0,
            },
            {
                id: 6,      
                name:  "Dagobah",
                value: 90000,      
                imageUrl: "https://f4.bcbits.com/img/a0980289374_10.jpg",
                quantity: 0,
            },
        ]


        const produtosEmComponentes = produtosLista.map((prod) => {
            return (

                <CardProdutos key={prod.id}>
                    <PlanetaImg src= {prod.imageUrl} alt="Planetas" />
                    <p>{prod.name}</p>
                    <p>{prod.value}</p> 
                    <button> Adicionar ao carrinho</button>
                    <br />
                    <br />
                </CardProdutos>

            );
          });

        return (
            <ContainerCardProdutos>
                
                {produtosEmComponentes}                    
                
            </ContainerCardProdutos>
        )

}

export default ProdutosCard

// onClick= {this.AddCart}

// const clickAddCart = () => {
            
//     const ProdSelected = 
// }

// const addCart = productsList.filter((prodSelect) => {
//     const listProdSelect = []
//     listProdSelect.push(productsList [prodSelect])
    
//     // const arrayProdSelect = []
//     // arrayProdSelect.push(handleProdSelect)

//     // return arrayProdSelect
// }

 // const handleProdSelect = (event) => {
        //     this.useState ({ tripSelect: event.target.value})
        // // }

        // const clickAddCart = (nameProduct)=> {
        //     //    const novoArray = productsList.slice(event.target.value)
    
        //     //    const element = event.target.productsList;
        //         const novoArray = []
        //         const indexProd = novoArray.findIndex((product) => {
        //             return product.name === nameProduct
        //         });
        //         novoArray.splice(indexProd, 1)
               
        //         console.log("Selecionei!")
        //         console.log(novoArray)
        //    }