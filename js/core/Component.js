export default class Component{
    $target;
    $state;
    $props;
    constructor($target, $props = []){
        this.$target = $target;
        this.$props = $props;
        this.setup();
        this.render();
        this.setEvent();


    }
    setup(){}
    mounted(){}
    template(){}
    render(){
        this.$target.innerHTML = this.template();
        this.mounted();
    }
    setEvent(){}
    setState(){}
    addEvent(eventType, selector, callback){
        const children = [...this.$target.querySelectorAll(selector)];
        const isTarget = (target) => children.includes(target) || target.closest(selector);
        this.$target.addEventListener(eventType, event => {
            if(!isTarget(event.target)) return false;
            callback(event);
        });

    }
}