document.addEventListener("DOMContentLoaded", () => {
	// search //
	const form = document.getElementById('searchForm');
	form.addEventListener('submit', (event) => {
		event.preventDefault();
		const sValue = document.querySelector('[name="search"]').value
		search(sValue)
		document.getElementById('results').classList.add('focus')
	});
	
	function search(keyword) {
	    //Display results
	    let scriptResults = document.querySelector('#resultsScripts')
		let snippetResults = document.querySelector('#resultsSnippets')
	
	    //fetch JSON
	    if (keyword != '') {
	        //Fetch API
	        fetch('json/posts.json?v='+pushVersion)
	        .then(res => res.json())
	        .then((out) => {
				function searchScripts(term) {
					return out.scripts.filter(({
						title,
						postedOn,
						author,
						lastEdit,
						tags,
						content
					}) => {
					  return title.toLowerCase().indexOf(term.toLowerCase()) > -1 ||
					  postedOn.toLowerCase().indexOf(term.toLowerCase()) > -1 ||
					  author.toLowerCase().indexOf(term.toLowerCase()) > -1 ||
					  lastEdit.toLowerCase().indexOf(term.toLowerCase()) > -1 ||
					  tags.toLowerCase().indexOf(term.toLowerCase()) > -1 ||
					  content.toLowerCase().indexOf(term.toLowerCase()) > -1 
					})
				}
				function searchSnippets(term) {
					return out.snippets.filter(({
						title,
						postedOn,
						author,
						lastEdit,
						tags,
						content
					}) => {
						return title.toLowerCase().indexOf(term.toLowerCase()) > -1 ||
						postedOn.toLowerCase().indexOf(term.toLowerCase()) > -1 ||
						author.toLowerCase().indexOf(term.toLowerCase()) > -1 ||
						lastEdit.toLowerCase().indexOf(term.toLowerCase()) > -1 ||
						tags.toLowerCase().indexOf(term.toLowerCase()) > -1 ||
						content.toLowerCase().indexOf(term.toLowerCase()) > -1 
					})
				}
				
				var outputSnippet = searchSnippets(keyword)
	            if (outputSnippet != undefined) {
					snippetResults.innerHTML = ''
					for (var i = 0; i < outputSnippet.length; i++) {
						snippetResults.innerHTML = snippetResults.innerHTML + `<a href='#${outputSnippet[i].URLid}' class='searchItem'>[snippet] ${outputSnippet[i].title}</a><br/>`;
					}
					console.log(outputSnippet)
	            }
				var outputScript = searchScripts(keyword)
	            if (outputScript != undefined) {
					scriptResults.innerHTML = ''
					for (var i = 0; i < outputScript.length; i++) {
						scriptResults.innerHTML = scriptResults.innerHTML + `<a href='#${outputScript[i].URLid}' class='searchItem'>[script] ${outputScript[i].title}</a><br/>`;
					}
	            }
				if(outputSnippet.length === 0 && outputScript.length === 0) {
					snippetResults.innerHTML = '<span>No Results found</span>'
				}

	        }).catch(err => console.error(err));
	    } else {
	        scriptResults.innerHTML = ''
			snippetResults.innerHTML = ''
	    }
	}
	// search //

	// events //
	document.addEventListener('focusin', function ( event ) {
		if(event.target.className == 'searchItem' ) {
			document.getElementById('TmInM').classList.add('focus')
		}
		if(event.target.id == 'TmInM' ) {
			document.getElementById('TmInM').classList.add('focus')
			document.getElementById('search').focus()
		}
		if(event.target.id == 'search' ) {
			document.getElementById('TmInM').classList.add('focus')
			document.getElementById('search').focus()
		}
	});
	document.addEventListener('focusout', function ( event ) {
		if(event.target.id == 'TmInM' ) {
			document.getElementById('TmInM').classList.remove('focus')
			document.getElementById('search').blur()
		}
		if(event.target.id == 'search' ) {
			document.getElementById('TmInM').classList.remove('focus')
			document.getElementById('search').blur()
		}
	});
	document.addEventListener('click', function ( event ) {
		if(event.target.id == 'TmInM' || event.target.id == 'search' || event.target.id == 'searchForm') {
			// nothing
		} else {
			document.getElementById('TmInM').classList.remove('focus')
			document.getElementById('results').classList.remove('focus')
		}
	});
	// events //
})
