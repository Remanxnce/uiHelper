export class uiHelper {
    /**
     * 
     * @param {*} player 
     * @param {import("./uiHelper").smallPanelContent} content 
     */
    static sendOverheadNotification(player, content){
        //ui.notification_2.
    }
    /**
     * 
     * @param {*} player 
     * @param {import("./uiHelper").smallPanelContent} content 
     */
    static sendSidescreenNotification(player, content){
        //ui.notification_1.
    }
    /**
     * 
     * @param {*} player 
     * @param {string} scoreboard 
     */
    static setScoreboard(player, scoreboard){
        player.onScreenDisplay.setTitle(`ui.scoreboard.${scoreboard}`)
    }
    /**
     * 
     * @param {*} player 
     * @param {import("./uiHelper").smallPanelContent} content 
     */
    static setPromoPanel(player, content){
        if (!content.image) return player.sendMessage(`ui.promo_noimg.`)
            const fullImage = content.image + (`\t`.repeat(100-content.image.length))
            player.sendMessage(`ui.promo.${fullImage}${content.title}${content.description ? `\n` + content.description : ""}`)
    }
    /**
     * 
     * @param {*} player 
     * @param {string} content 
     */
    static setEffectPanel(player, content){
        player.onScreenDisplay.setTitle(`ui.effects.${content}`)
    }
    /**
     * 
     * @param {*} player 
     * @param {number} content 
     */
    static setAbsorptionPanel(player, content){
        player.onScreenDisplay.setTitle(`ui.abs.${content}`)
    }
    /**
     * 
     * @param {*} player 
     * @param {number} duration 
     */
    static setTimerBarDuration(player, duration){
        player.onScreenDisplay.setTitle(`ui.timer.${duration}`)
    }
}