// 兼容getElementsByClassName
if (!('getElementsByClassName' in document)) {
  function getElementsByClassName (classList) {
    if (typeof classList !== 'string') throw TypeError('the type of classList is error')
    // 获取父元素
    var parent = this
    // 获取相应子元素
    var child = parent.getElementsByTagName('*')
    var nodeList = []
    // 获得classList的每个类名 解决前后空格 以及两个类名之间空格不止一个问题
    var classAttr = classList.replace(/^\s+|\s+$/g, '').split(/\s+/)
    for (var j = 0, len = child.length; j < len; j++) {
      var element = child[j]
      for (var i = 0, claLen = classAttr.length; i < claLen; i++) {
        var className = classAttr[i]
        if (element.className.search(new RegExp('(\\s+)?'+className+'(\\s+)?')) === -1) break
      }
      if (i === claLen) nodeList.push(element)
    }
    return nodeList
  }
  // 兼容ie5及以上的document的getElementsByClassName接口
  document.getElementsByClassName = getElementsByClassName
  // 兼容ie8及以上的getElementsByClassName接口
  window.Element.prototype.getElementsByClassName = getElementsByClassName
}