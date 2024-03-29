const { EmbedBuilder, PermissionsBitField, SlashCommandBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder, Embed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("davet")
    .setDescription("Botu Davet Etmek İçin"),
  run: async (client, interaction) => {
    const davetet = new ButtonBuilder()
	.setLabel('Davet Et')
    .setEmoji('<:DiscordPartner:843452044974096394>')
	.setStyle(ButtonStyle.Link)
    .setURL(`https://discord.com/oauth2/authorize?client_id=784899334109659196&scope=bot&permissions=8`)

    const destek = new ButtonBuilder()
	.setLabel('Destek Sunucusu')
    .setEmoji('<:Discord:843452051445776404>')
	.setStyle(ButtonStyle.Link)
    .setURL(`https://discord.gg/Ay852SnqCn`)

const row1 = new ActionRowBuilder()
.addComponents(davetet)

    const row = new ActionRowBuilder()
    .addComponents(davetet, destek)

    const embed = new EmbedBuilder()
      .setAuthor({ name: "Versty" })
      .setColor(0x9b30ff)
      .setDescription(`Linkler Alınıyor...`)

    const embed1 = new EmbedBuilder()
      .setAuthor({ name: "Versty" })
      .setColor(0x00ffff)
      .setDescription(`
      <a:seviye:843471961316655105> Beni Davet Etmek İçin [Tıkla](https://discord.com/oauth2/authorize?client_id=784899334109659196&scope=bot&permissions=8)
      <a:krmzyldz:843471834938867732> Destek Sunucum İçin [Tıkla](https://discord.gg/Ay852SnqCn)
      `)
      
    interaction.reply({ embeds: [embed] }).then(m => {
      setTimeout(() => {
        m.edit({ embeds: [new EmbedBuilder().setColor(0x00ff00).setTitle('Linkler Alınıyor').setDescription(`<a:seviye:843471961316655105> Beni Davet Etmek İçin [Tıkla](https://discord.com/oauth2/authorize?client_id=781194108885925948&scope=bot&permissions=8)`)], components: [row1] })
      }, 1000)
      setTimeout(() => {
        m.edit({ embeds: [embed], components: []})
      }, 2500)
      setTimeout(() => {
        m.edit({embeds: [new EmbedBuilder().setColor(0x00ff00).setTitle('Linkler Alındı!').setDescription(`<a:seviye:843471961316655105> Beni Davet Etmek İçin [Tıkla](https://discord.com/oauth2/authorize?client_id=781194108885925948&scope=bot&permissions=8)\n<a:krmzyldz:843471834938867732> Destek Sunucum İçin [Tıkla](https://discord.gg/Ay852SnqCn)`)], components: [row]})
      }, 5000)
      setTimeout(() => {
        m.edit({embeds: [embed1], components: [row]})
    }, 5500)
    })
  }
};