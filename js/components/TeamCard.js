import Component from '../core/Component.js';

export default class TeamCard extends Component{
    setup(){}
    template(){
        const teams = this.$props;
        console.log(teams);
        return `${
            teams.map((team) => {
                `<div class="team-card-container">
                    <a href="/kanban.html" class="card">
                        <div class="card-title">
                        ${team.name}
                        </div>
                    </a>
                </div>`
            }).join('') + `
                <div class="add-team-button-container">
                    <button id="add-team-button" class="ripple">
                    <span class="material-icons">add</span>
                    </button>
                </div>
            `}
        `;
    }

    setEvent(){}
}