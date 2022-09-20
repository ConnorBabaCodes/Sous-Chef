import React from 'react'


export default function HomeSearch() {
    return (
        <section className="home-search">
            <h1>What do you want to make?</h1>
            <div className="genre-buttons">
                
                <div className="genre-container">
                    <div className="genre">
                    <i class="fa-solid fa-fire fa-2xl"></i>
                    </div>
                    <p>Popular</p>
                </div>
                <div className="genre-container">
                    <div className="genre">
                    <i class="fa-solid fa-pizza-slice fa-2xl"></i>
                    </div>
                    <p>Italian</p>
                </div>
            </div>
            <h1>Popular Recipes</h1>
            <div className="recipe-list">
                <div className="recipe-card">
                <div className="recipe-photo-container">
                    <img className="recipe-photo" src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/113777-0b21d44.jpg"/>
                    <p className="time">🕒 15 mins</p>
                    <p className="rating"> ★ 4.5</p>
                </div>
                <h5>Bullshit Curry</h5>
                <p>Asian</p>
                </div>
                <div className="recipe-card">
                <div className="recipe-photo-container">
                    <img className="recipe-photo" src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/113777-0b21d44.jpg"/>
                    <p className="time">🕒 15 mins</p>
                    <p className="rating"> ★ 4.5</p>
                </div>
                <h5>Bullshit Curry</h5>
                <p>Asian</p>
                </div>
                <div className="recipe-card">
                <div className="recipe-photo-container">
                    <img className="recipe-photo" src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/113777-0b21d44.jpg"/>
                    <p className="time">🕒 15 mins</p>
                    <p className="rating"> ★ 4.5</p>
                </div>
                <h5>Bullshit Curry</h5>
                <p>Asian</p>
                </div>
            </div>
        </section>
    )
}