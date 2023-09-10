import json

def intersection_tags(templates_hack, templates_user):
    file_uh = {
		'user_id' : templates_user['user_id'],
		'hack_corespondence':[]
    }
    for i in templates_hack:
        file_uh['hack_corespondence'].append({
            'hack_id': i['hack_id'],
			'corespondence': len(list(set(i['tag']) & set(templates_user['tag'])))}
        )
    return file_uh

with open('hackatons.json') as f:
    templates_hack = json.load(f)
with open('user.json') as ff:
    templates_user = json.load(ff)
print(intersection_tags(templates_hack, templates_user))